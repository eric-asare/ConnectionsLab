# COLLABDRAW ( Make Art Here!) 
![Landing Page](https://eric-asare.github.io/ConnectionsLab/projectThree/design/beforeChallengeIsPressed.png)

## Description:
A collaborative drawing application built using Node, Express, and socket.io.

**Link to working app:** https://collabdraw-play.glitch.me/

<p align="center">
  <img 
    width="450"
    height="300"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/Room.png"
  >
</p>

**“CollabDraw”** is a collaborative drawing application where two users come together to make art under a time condition. This is for you to draw a unique Art together with your friends in real-time over the internet in your browser. Take turns, complete each others drawing, be in sync and foster stronger relationships. Afterall, when it comes to art, we don’t make mistakes, just happy little accidents. Joy is even greater when it comes from the unexpected. Unleash your creativity and boost teamwork<br/><br/>

<p align="center">
  <img 
    width="450"
    height="300"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/drawing1.png"
  >
</p>


## Inspiration:
I enjoy drawing on a sheet of paper with no idea of what I want to end up with. I experiment strokes and at the end I am always shock what I come up with. I then turn to my friends and the person next to me, look what I have done. 

---

> I made this app for you and me if you ever had the joy of drawing or sharing a drawing with a friend. Let's Draw.
> -- Eric (CTO)
---
<br/><br/>

## Production

 _The Plan_
To build a functional application with clean UI. 

_The WireFrame_

I started off with a simple sketch of the game flow to inform the phase 1 coding. I didn't make a lot of sketches in project three because I focussed more on the communication between client and server (game flow) which is listed below. The user interface became really clear as a result of the user testing. 

![Layout Sketch](https://eric-asare.github.io/ConnectionsLab/week10/memoICE/design/collabDrawWireframe.png)

_The Game Flow Steps_  
* Two users join the same room. Room is full when two people join. When a third User Join, he or she is prompted to join another room

* Only one of the users has to select the Drawing mode (Free Drawing or Challenge Mode), the clients sends a signal to the server to load the data (timer and logic) for the drawing mode. Both modes of drawing are pretty similar, the difference is that in the challenge mode, the users will be shown a prompt like "draw a castle" before the timer starts. 
   
*  Client upon receiving this drawing logic data displays to the users ("continue each others drawing to create the unexpected" , "collab to draw a flower") and starts the drawing timer. 

* The 10 countdown timer starts for the first user, he or she gets to draw while the other user can't (waits his or her turn). Each user continue each others drawing inturns until the whole experience timer is over(~3mins). 
   
*  Once the timer is done, the clients sends to server drawing time is over, the server sends to the client to view the final product.

## User Testing Feedback:
_What I change_
1. Something to indicate that challenge is a button: changed the color on hover. 

2. Names on thank you page is small: increased the size. 

3. I do not see the need for a free draw mode, deleted free draw mode, updated to challenge mode.

4. How do I know its my turn: Added vibrating timer to indicate and contrasting colors to indicate change in turn.

Pictures of users interacting with the CollabDraw

<p align="left">
  <img 
    width="200"
    height="200"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/playingTheGame.png"
  >
</p>


<p align="right">
  <img 
    width="400"
    height="400"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/playingtheGame1.png"
  >
</p>

<p align="left">
  <img 
    width="400"
    height="400"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/playingTheGame3.png"
  >
</p>

<p align="right">
  <img 
    width="400"
    height="400"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/playingTheGame4.png"
  >
</p>


## Key Challenges / Things I Learnt:
1a. Wanted to create a shareable room link but couldn't 

1. Timer: 
It took me a lot of hours to figure out the timer logic for the turns. 
I started of by using a timer loop for turns inside another timer for overall drawing time. It did not go well so I changed the architecture. This time I sent info to server to tell client which of the clients turn it is. I realized later on that I can handle the turns timer on the client side by using modulo.

```javascript

   if (timeLeft % 10 == 0) {
                turnVariable = 1 - turnVariable
                turnInfo.classList.add('vibrate-1');
                nameData = {
                    name: userNames[turnVariable]
                }
                socket.emit('turnUserName', nameData);
            }
```
2. There were a bunch of time that changes or server emitting to clients were not received by all client. `  io.to(socket.roomName).emit('X', data);` always comes to the rescue. 

3. p5 loading was not easy as I expected it to be. I did not want to load the canvas only when I wanted to. Upon a little research, I found out how to load p5 whenever one is ready. 

```javascript

    const s = (sketch) => {

        let c = "black";

        sketch.setup = () => {
            sketch.createCanvas(0.7 * window.innerWidth, 400);
            sketch.background(205);
            // do more stuff
        }

        sketch.draw = () => {
          // do stuff
        }
    };

  // instantiate the p5
    let myp5 = new p5(s);

```

4. p5 reference was extremely helpful in figuring how to use the methods and checking examples to be inspired. 


5. Preventing another user from drawing was hard, so I check the name of the current client, if it is not his or her turn I do not draw on their canvas.

```javascript
                let currentname = document.getElementById("user-name").innerHTML;

                if (canDraw == "yes" && whoShouldDraw == currentname) {
                    console.log(whoShouldDraw);
                    socket.emit('mousePositionData', mousePos);

                } else {
                    console.log("Data Not Sent");
                }
```

6. Started newDB but didn't know how to fetch the localhost:4000/drawingApi, network error, 404

7.I learnt to build a clean UI with few colours (red, black, blue, grey), just one font.

8. Braistorming with other people is the best thing you can do to help yourself as a developer. I was stuck in ideation, I approached few friends in class with less clarity on what I wanted to build but left our conversation with an inspiration of what to build. Thanks Prof. Mathura for encouraging this. 

## Next Steps:
1. Update the drawing board to the image below

<p align="center">
  <img 
    width="200"
    height="200"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/futureBoard.png"
  >
</p>

2. I really want to have a collection of all the art people create and put them into a gallery like below. Other users can explore the drawings of others, be encourage and spend more time on the app. The interface will be like below. 

<p align="center">
  <img 
    width="200"
    height="200"
    src="https://eric-asare.github.io/ConnectionsLab/projectThree/design/galleryDesign.png"
  >
</p>

3. Update the challenge messages and the studio rooms based on Art in those museums

4. Add sound effects for the timer. 



## References:

* Create shearable room link : https://stackoverflow.com/questions/71037062/create-a-sharable-url-for-a-room-nodejs-socketio

* Socket io rooms based on link: https://stackoverflow.com/questions/31373455/socket-io-rooms-based-on-link

* Drawing Ideas : https://www.creativelive.com 

* Get random number: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

* To load p5 only when you are ready: https://stackoverflow.com/questions/56639804/is-there-a-way-to-only-run-p5-js-once-an-event-happens

* p5 global and instance mode : https://github.com/processing/p5.js/wiki/Global-and-instance-mode

* Get animations for free: https://animista.net/play/attention


* p5 reference library: https://p5js.org/reference/#/p5/draw


* Draw an element outside draw box: https://stackoverflow.com/questions/50770189/p5-js-drawing-an-element-outside-draw

* Save canvas data to file : https://stackoverflow.com/questions/5867534/how-to-save-canvas-data-to-file


* Pencil thickness : (https://editor.p5js.org/Zoe/sketches/HJdsXS1BZ)

* Send canvas image over to socket: https://stackoverflow.com/questions/24779288/sending-a-canvas-image-over-socket-io


## Presentation
Slides : https://eric-asare.github.io/ConnectionsLab/projectThree/design/presentation-2.pdf
