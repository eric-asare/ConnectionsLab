#  A simple page with Rivescript 
Built using JavaScript, RiveScript, CSS & HTML

## Description
 ![HomePage](https://eric-asare.github.io/ConnectionsLab/week11/Mimi/design/homePage.png)

RiveScript is a simple Javascript library for chatbots with a friendly , easy to learn syntax. 

I wanted to explore the library documentation while creating a fun and playful chatbot for users to interact with.

Since RiveScript is rule-based, that is you predetermine the questions and answers, I settled on simple introduction and tell a joke. 

This is how the rules look like

```
+(hello|hi|hey|howdy|hola|hai|yo) [*]
- hello, welcome to Mimi-The-Bot, what is your name?


+ thank you
- you are welcome
- welcome
- no problem

```


## Working Link
  [Link](https://eric-asare.github.io/ConnectionsLab/week11/Mimi/index.html)
         

## Production

  * ### The WireFrame
       ![Wireframe](https://eric-asare.github.io/ConnectionsLab/week11/Mimi/design/wireFrame.png)
         
  * ### Development Steps
        1. Get input from the user after pressing enter. HTML
        2. Chat Interaction Logic - JS, RiveScript
        3. Styling - CSS


## Challenges & Solutions
   * Even though I had the proper form setup I was getting errors of `null`. 
   - I decided to use text box and listen for enter key pressed
   - placed the eventlisterner code under window.addEventlistener('load') and everything is working
   - so I reverted back to the form

   * Got this error
   ``` javascript
        Refused to apply style from 'http://127.0.0.1:5500/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled
   ```
   - wait, silly me, I spent mins googling. It was because I named my css file `styles.css` and I included `style.css`



## Lessons
  * Wireframes indeed make life easy. 
  * RiveScript even though simple can be used to create really powerful chatbots
  * Library Documentations are less intimidating if you start off with some few examples. 
  * RiveScript has the same setup as `express` like `let chatBot = new RiveScript();`
  * The equivalence of `index.js` to RiveScript is the `.rive` file one has to create to hold the chat logic known as trigger and responses. 
  * The `+` sign in the logic file is called **trigger**
  * The `-` sign signifies **response** to the **trigger**
  * The `*` as used in `css` files has the same role in `.rive` files, it refers to all the messages that do not match the triggers
  * The `<star>` acts like a variable
  * Block of space is used to separate a set of question and response from another. 
  * You can have as many `logic files` as you want. 
  * RiveScript uses the `.then` architecture as `promises` do.
  * Blue and orange used for the bot and user chat messages are complementary colors. 


##  Next Steps
  * Incoporate a chat bot into MemoICE to server as customer / game support. 
  so instead of users reading written instructions to cover all user issues, they can interact with the chat bot to find solutions to their specific issues

  * Explore more of RiveScript 

  * Look into D3, Three.js, Ml5, Aframe,and Leaflet


## Refrences & Resources
* (RiveScript Documentation) https://www.rivescript.com/

* (A faster and easy way to load libraries is to use cdnjs) https://cdnjs.com/

* (Limiting a div height inside another) https://stackoverflow.com/questions/39909155/100-height-for-div-inside-another-div-with-margins

* (chat bot example) https://medium.com/@awesammcoder/javascript-tutorial-simple-chatai-using-rivescript-js-4f0291e298f1




