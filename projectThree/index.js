// number of people allowed in a room
let previousDrawings = []
const MAX_USERS_ROOM = 2;


// colors to differentiate users in same room
const colorCode = ['brown', 'purple']



//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));


// neDB
// const DataStore = require('nedb');

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);

//Initialize socket.io
let io = require('socket.io');

const { response } = require('express');
io = new io.Server(server);



let rooms = {}; // key value pair - 'roomname' : number of people in room
let users = {}; // key value pair - 'username' : userid
let userNames = {}; // key value pair - roomname: names
let userColors = {}; // username - color


//when client tries to connect to server
io.sockets.on('connect', (socket) => {
    console.log('new socket connection ,', socket.id);

    //get user data
    socket.on('userData', (data) => {

            //save user name in an array
            socket.name = data.name;
            users[socket.name] = socket.id;


            if (rooms[data.room]) { //is the room already there?
                if (rooms[data.room] < MAX_USERS_ROOM) {
                    //let the socket join room of choice
                    socket.roomName = data.room; // we will add this data to the socket only after we can verify that there is space
                    socket.join(socket.roomName);
                    rooms[socket.roomName]++;

                    // add second roomate name
                    if (userNames[socket.roomName][1]) {
                        userNames[socket.roomName][1] = socket.name;
                    }

                    //add second user score
                    userColors[socket.name] = colorCode[1];


                    previousDrawings = [];

                    //get names of users in room
                    let firstName = userNames[socket.roomName][0];
                    let secondName = userNames[socket.roomName][1];

                    let message = {
                        'msg': `Welcome ${firstName} & ${secondName}! Choose a drawing mode as the room is full`
                    }


                    //emit the welcome message to clients in the room
                    io.to(socket.roomName).emit('secondUserJoined', message);

                } else {
                    // tell client trying to join that room is full
                    socket.emit('maxUsersReached');
                }

            } else {
                socket.roomName = data.room;

                // add room to socket
                socket.join(socket.roomName);

                // initialize number of people in room
                rooms[socket.roomName] = 1;

                // add colour of first to join room
                userColors[socket.name] = colorCode[0];

                // initialize names of users
                userNames[socket.roomName] = [socket.name, "unknown"];

                // let client know it's the first user to join so it should wait
                socket.emit('firstUserJoined');
            }

        })
        //on disconnection
    socket.on('disconnect', () => {
        console.log('connection ended, ', socket.id);
        rooms[socket.roomName]--;

        //delete the room data since it's a collaboration game -to keep users on show
        delete userNames[socket.roomName]
        delete users[socket.name];
    })




    // listen from mouse position data from client side
    socket.on('mousePositionData', (data) => {
        if (!previousDrawings.includes(data)) {
            previousDrawings.push(data);
        }

        // once you receive the data emit it to all sockets or clients
        io.sockets.emit('mouseDataFromServer', data);


    })


    socket.on('drawOver', (imgData) => {

        let firstName = userNames[socket.roomName][0];
        let secondName = userNames[socket.roomName][1];

        let imgURL = imgData.URL;

        const timestamp = Date.now();

        nameData = {
            name: `${firstName} & ${secondName}`
        }

        // database.insert({
        //     name: `${firstName} & ${secondName}`,
        //     drawingImg: imgURL,
        //     timestamp: timestamp
        // })


        io.to(socket.roomName).emit('endDraw', nameData);
    })


    socket.on('turnUserName', (nameData) => {
        console.log(nameData.name);
        io.to(socket.roomName).emit('userNameArrived', (nameData));
    })


    socket.on('turnsLogic', () => {


        // send previous Drawings when new client joins
        let data = { oldDrawings: previousDrawings };

        // socket.emit to only that socket
        socket.emit('pastDrawings', data);


        // console.log(turn);
        let currentUsersNames = userNames[socket.roomName];

        let nameData = {
            usernames: currentUsersNames
        }

        io.to(socket.roomName).emit('whosTurn', nameData);

    })




    socket.on('getDrawMode', (data) => {

        let challengeInfo = ["Continue each others drawing to Illustrate a scene from a popular song", "Continue each others drawing to complete a love flower.", "In turns draw together one object and give it a face.", "In turns, Create together an alternate cover to a famous book or album.", "In turns Illustrate a fairy-tale together"]
        let freeInfo = "Complete each others drawing to create something unexpected";

        let random = Math.floor(Math.random() * challengeInfo.length);
        let challenge = challengeInfo[random]

        let modeInfo = "";

        if (data.mode == "freeDraw") {
            modeInfo = freeInfo;
        } else {
            modeInfo = challenge;
        }


        let modeInfoData = {
            info: modeInfo
        };

        io.to(socket.roomName).emit('modeInfo', modeInfoData);
    })

    // receives draw start and initiate drawing
    socket.on('drawStart', (data) => {
        let roomName = socket.roomName;
        let mode = data.mode;

        data = {
            roomName: roomName,
            mode: mode
        }


        console.log(data);

        io.to(socket.roomName).emit('drawBegins', data);
    })

})



// Get all cars or cars with a min price
// app.get('/drawingsApi', (req, res) => {
//     res.json({ test: "hello" });

//     database.find({}, (err, data) => {
//         if (err) {
//             response.end();
//             return
//         }
//         res.json(data);

//     })

// })


//run the createServer
let port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});