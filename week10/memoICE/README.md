MemoICE
----------------------

### DESCRIPTION
MemoICE is a memory game designed to train the brain , increase once's vocabulary and build friendship. Users (two players each) play against time to memorize words shown them. Then write all the words they remember to earn points and a place as a fire breather on the leaderboard. 

MemoICE has easy, medium, difficult and pro levels. Users can select the level and enter the room designed purposely for such level of gaming. 

### WORKING LINK
The working link to working page [WebPage-Progress](https://twilight-fringe-casquette.glitch.me)


### WIREFRAME

  ![Layout Sketch](https://eric-asare.github.io/ConnectionsLab/week10/memoICE/design/wireframe.png)

### STEPS COMPLETED
This is the game flow

* Two users  enter their name and join the same room from the lobby or landing page ( There are 4 rooms based on game difficulty : easy, medium, hard, pro levels)

* When a third User Join, he or she is prompted to join another room

* Only one user has to click the start button. Once, the start button is clicked, the client side sends a signal to the server to load the game data ( ideally , words to test users and the timelimit to memorize). 

* Client upon receiving this game data displays to the users and starts the timer. 

* Once the timer is done, a text box appears to the users telling them to enter the words they remember ( Ideally there should be a timer for this as well so that it causes the users to feel a sense of urgency and to make the leader board competitive)

* When users submit a word, the data is sent from the client side to the server side 

* The server upon receiving the wordInput data prepares a progress report to send to client by 1. keeping track of the name of the user who submitted the word, 2. where the word is correct or wrong 3. Score increment and deduction

* The client upon receiving the progress report back displays to the user

* When the remembering phase timer is over, the users are shown their score and position on the leader board and redirected to the lobby. 

### CHALLENGES AND LESSONS
* Keeping Score Board - adding to array in OBJECTS 
* Lots of bugs, solved by running little of the client -server communication as I write


### NEXT STEPS
* Detailed Wireframe
* Improve UI
* Top 5 players on landing page
* Add Words Shuffler or Generator (API)
* Timer for writing remembered words
* neDB for Score Board
* Functions to clean up code
* Remove unused code

### USER TEST OUTCOMES

#### QUESTIONS


* What is your first impression of the product?

* What is going in your mind as you interact with this product?

* What did you expect to happen?

* When or Where do you think you or your friend would want to use this product?

* Do you know any theme that goes with a memory game?

* Will you want to come back to this product after your first experience? What would you change? What would you keep?

* Would you use this today?

* What might keep people from using this?

* What is the most you would be willing to pay for this?

* What, if anything, do you like or dislike?

* If you had a magic wand, what would you change?

* Does this feel like it was designed for you?

* Is anything missing?

* What adjectives would you use to describe this?

* On a scale of 1–5, how likely or unlikely would you be to recommend this to a friend?

* Since this isn’t finished, what would you like to see in the final version?


#### SUGGESTIONS FROM CLASS
