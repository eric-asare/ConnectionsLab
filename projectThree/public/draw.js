// color for change in turns
const colorCode = ['red', 'black']
const backgroundCode = ['black', 'red']

// declare p5 sketch
let myp5;

// variables for sketching
let canDraw = 'no';
let thickNess = 10;
let whoShouldDraw = "";



// variables to store current drawings and users
let pastDrawings = []

// client connects to the server
let socket = io();

//confirm that the client is connected
socket.on('connect', () => {


    console.log('connected to the server');
    // now that client has connected to server, emit name and room information
    let data = {
        'name': sessionStorage.getItem('name'),
        'room': sessionStorage.getItem('room')
    }
    socket.emit('userData', data);
})

// limiting number of people in room to 2
socket.on('maxUsersReached', () => {
    alert('This room is full. Please go back and try to join another room');

    document.getElementById("game-form").innerHTML = ""

})


// telling first user to join room to wait for game partner
socket.on('firstUserJoined', () => {
    alert('Hey! Be patient as your drawing partner joins');
})


// telling the team to begin playing the game
socket.on('secondUserJoined', (data) => {
    let welcomeMessage = data.msg;
    alert(welcomeMessage);
})


// do this when drawing time ellapses
socket.on('endDraw', (nameData) => {
    let canvas = document.getElementById('defaultCanvas0');
    document.body.innerHTML = " ";

    let description = document.createElement('div');
    description.classList.add('desc');
    description.innerHTML = "Nice Art! " + nameData.name;
    description.style.fontSize = '20px';


    let thankyou = document.createElement('div');
    thankyou.innerHTML = "Thank you!";
    thankyou.style.fontSize = '20px';

    document.body.appendChild(canvas);
    document.body.appendChild(description);
    document.body.appendChild(thankyou);

})


// p5 draw setup
function drawSetup() {
    console.log("How many times I am called")

    const s = (sketch) => {

        let c = "black";

        sketch.setup = () => {
            sketch.createCanvas(0.7 * window.innerWidth, 400);
            sketch.background(205);
            // if new user joins, show old drawings
            if (pastDrawings.length > 0) {

                for (let i = 0; i < pastDrawings.length; i++) {
                    let data = pastDrawings[i];
                    sketch.fill(data.red, data.green, data.blue);
                    sketch.ellipse(data.x, data.y, data.size, data.size);
                }
            }
        }

        sketch.draw = () => {

            if (sketch.mouseIsPressed) {
                //mouse data
                let mousePos = {
                    x: sketch.mouseX,
                    y: sketch.mouseY,
                    px: sketch.pmouseX,
                    py: sketch.pmouseY,
                    color: c,
                    thickness: thickNess
                };



                let currentname = document.getElementById("user-name").innerHTML;



                if (canDraw == "yes" && whoShouldDraw == currentname) {
                    console.log(whoShouldDraw);
                    socket.emit('mousePositionData', mousePos);

                } else {
                    console.log("Data Not Sent");
                }



            }

            sketch.noStroke();
            //draw the first button
            sketch.fill("red");
            sketch.rect(0, 0, 40, 40);

            //draw the second button
            sketch.fill("blue");
            sketch.rect(40, 0, 40, 40);


            let currentname = document.getElementById("user-name").innerHTML;

            // listen for mouseData from server
            socket.on('mouseDataFromServer', (data) => {
                // console.log(data);
                sketch.stroke(data.color);
                sketch.line(data.x, data.y, data.px, data.py);
                sketch.strokeWeight(data.thickness);
            })

            // listen for mouseData from server
            socket.on('userNameArrived', (data) => {
                whoShouldDraw = data.name;
            })


        }

        //this will run whenever the mouse is pressed
        sketch.mousePressed = () => {
            if (sketch.mouseX > 0 && sketch.mouseX < 40 && sketch.mouseY > 0 && sketch.mouseY < 40) {
                //set the variables to random values
                c = "red";
            }
            if (sketch.mouseX > 40 && sketch.mouseX < 80 && sketch.mouseY > 0 && sketch.mouseY < 40) {
                //set the variables to random values
                c = "blue";
            }
        }

    };

    let myp5 = new p5(s);
}

// determine the turns base on 10 seconds. 
socket.on('whosTurn', (nameData) => {

    canDraw = "yes";
    let userNames = nameData.usernames;


    let currentname = document.getElementById("user-name").innerHTML;
    let turnVariable = 1;

    // timer info
    let timeLeft = 60;
    let elem = document.getElementById("game-timer");

    // variable to display the turns
    let turnInfo = document.getElementById("turns-timer");

    function countdown() {
        if (timeLeft == -1) {

            // tell server, drawing is over
            let jpgQuality = 0.60;
            let canvas = document.getElementById('defaultCanvas0');
            let theDataURL = canvas.toDataURL('image/jpeg', jpgQuality);

            imgData = {
                URL: theDataURL
            }

            socket.emit('drawOver', imgData);


        } else {
            // show correct time
            if (timeLeft % 10 == 0) {
                turnVariable = 1 - turnVariable
                turnInfo.classList.add('vibrate-1');
                nameData = {
                    name: userNames[turnVariable]
                }
                socket.emit('turnUserName', nameData);
            }

            turnInfo.innerHTML = userNames[turnVariable] + "'s Turn";
            turnInfo.style.color = colorCode[turnVariable];
            turnInfo.style.backgroundColor = backgroundCode[turnVariable];


            if (isDigit(timeLeft)) {
                elem.innerHTML = '00:0' + timeLeft;
            } else {
                elem.innerHTML = '00:' + timeLeft;
            }

            timeLeft--;
        }
    }
})


// alert the information
socket.on('modeInfo', (modeInfoData) => {
    document.getElementById('instruction').innerHTML = modeInfoData.info;
    socket.emit('turnsLogic');
})




// receive draw data from server
socket.on('drawBegins', (drawData) => {
    drawMode = drawData.mode;

    document.getElementById('challenge').style.visibility = 'hidden';

    document.querySelector('.draw-game-timer').style.visibility = 'visible';


    let data = {
        mode: drawMode
    }

    socket.emit('getDrawMode', data);

})


window.addEventListener('load', () => {
    //get username and show on game page
    let userName = document.getElementById('user-name');
    userName.innerHTML = sessionStorage.getItem('name');

    drawSetup();

    // // get game level and show on game page
    let gameLevel = document.getElementById('game-header-msg')
    gameLevel.innerHTML = "Studio: " + sessionStorage.getItem('room').toUpperCase();


    // listen for mode button and emit data

    let challengeButton = document.getElementById('challenge');


    challengeButton.addEventListener('click', () => {

        data = {
            mode: "challenge"
        }



        socket.emit('drawStart', data);
    })

})

// check if it is a digit
function isDigit(val) {
    return String(+val).charAt(0) == val;
}


// listen for past Drawings data from server
socket.on('pastDrawings', (data) => {
    pastDrawings = data.oldDrawings
})