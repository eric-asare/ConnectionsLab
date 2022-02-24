#  Inspire! Project Documentation 
## Description

### Product

 * clear description of the project,
 * production decisions (i.e. technical, design, conceptual, creative etc)
 * influences and inspiration, 
 Throughout the day, I check social media especially whatsapp status and it seems all my friends post an inspirational quote downloaded from somewhere or typed out on a text. 

 I also have friends who write poems , try to use other resources to create their quote but alwasy comes with an ad at the lower button. 
 I would like them to have a no ad site, 

I have really benefitted from most of those quotes and sometimes I even look forward to them

I have friends who follow pages, group chats, accounts that post this graphic quote images so that they can download and keep

Graphic quotes looks great when shared. 

Sometimes I get a lot of insights when reading books and want to share in a creative way. 

A solution where you don't need to download an app to take up space on your phone, or be restricted on what device you need to access the application


Not all of us have the graphical ability to design our own
 * key challenges and solutions, 
 * overall lessons learned as well 
 * potential next steps,
 * and relevant references/resources that were utilized

Inspire! is your one-stop shop for inspirational quotes. Don't waste your time searching the web or chat groups for a quote. Visit Inspire!, check the daily mood booster, find a specific quote or create your own to save or share with friends. 

Inspire! is a free, mobile-friendly, flexible, fast, and fun webpage that is specially designed for you. 

**Free** - This site has no ads, 100% free. No hourly limits. No restrictions

**Mobile Friendly**- This site does not require you to switch to a desktop

**Flexible , Fast and Fun** - This site is for you whether you just want a quick glance at a quote to brighten your day, whether you want to make your own or if you just want to browse quotes from your favorite topics or authors. 

---

>  Oftentimes, all you need to get the next big project done is a well-chosen      inspirational quote. 
> Positive quotes are known to help improve mental health. 
>
> -- Eric (CTO, Inspire!)

---
### Process

Here is Week 4 documentation. For older versions, see git history

Week 3 was indeed a rollercoaster. Good news, we now have a data source and user experience mapped out right below. 

![Wireframe & User Journey](https://eric-asare.github.io/ConnectionsLab/week3/Inspire!/design/userJourney.png)


I will be launching the site in two phases. Initially, I will roll out the quick-mood-boosters and make-your-own features, then later I will implement the find-your-inspiration feature.

I will be using quotable API as source of data. 


**SO THE STEPS ARE**
- use mobile-first design

* Create Homepage 
    * Transform Wireframe to webpage - HTML
    * Style Homepage - CSS
    * Quick-Mood-Booster Feature - JS (API and Data)

* Implement make-your-own feature
    * Transform Wireframe to webpage - HTML
    * Style page - CSS
    * Taking user's quote and name - JS
    * Choosing background - JS
    * Transforming quote and selected background into graphic quote - JS
    * Share button - JS
    * Save button - JS

* TIP : Upload variations of the index images with part of the code deleted to show progress 

#### HOMEPAGE
##### Transform Wireframe to webpage - HTML

###### CSS
Created the logo to be stimulating, motivating and fun as the same time. 

You must include a credit link to our website(https://www.styleshout.com) 
###### HTML & CSS





https://www.innovation-creativity.com/colors-that-inspire-creativity/

green , blue, Orange , yellow and green to signify creativity and inspiration 

Happy colors are bright, warm colors like yellow, orange, pink and red. Pastel colors like peach, light pink or lilac 

To make the user experience great quality , I did this and that

In designing, this is how I accounted for user experience

In usability, this how I accounted for quality user experience

In accessibility , this is how I accounted for user experience, 
* using `main` tag to users using screen readers to locate the main content

In user interaction :
I have already mapped it above


For the Styling
I optmize the layout for both phone users and desktop users

Made buttons to ensure users are able to jump between pages




For the first phase, I focussed more on building something that work , then worry about the aesthetics later to save some time. 

Thanks to placekitten.com , I didn't have to worry about images.

I started off thinking about how to build the site to be mobile-friendly. 


I decided to divide the homepage / landing page into 

I translated the wireframe directly into html. 

Wanted the homepage to carry along the breathtaking, charged, electric, electrifying,exciting feeling the quotes is expected to make the user feel. 

I did some research and also based on my own experience with certain websites , decided to include the following.

When you hover the button, it grays out

* emojis
*

For sharing, I was thinking of using the share web API but it only worked on a number of devices and I wanted to build this product for all so I decided to build custom share buttons and a download button.

I wanted the user to feel a sense of charge, electric so all the images had something close to it. 

By the time the user leaves the page, he or she feels charged to continue his day, proud of quote, happy to share, feels like a child who learns to make something easier.

 No need to learn photoshop skills or great editing skills to be able to make your own graphic quote. User can play along with what text they include,they can select between images, share with friends what they create, or keep a collection of their creativity for their portfolio. 

 The convenience 


Use image as radio selector. 
instead of just doing
* image1
* image 2
It makes the user feel it. 


Next step : html2Canvas library

Have an image as background , set the position to relative and add a text on top , as the user type, I show the message on the image selected



### CHALLENGES
* making the background images appear as radio buttons-
found out that CSS3  has a solution to that ( StackOverflow also had a lot of discussions on that )

One of the solutions required me to call the images in the css file and to do some complex coding. 

The one I eventually used was easy to follow and understand where I kept the image in the css file. 

One challenge I run into was making all the four radio buttons act as one. selecting one will deselect the other. I learnt a good trick to give all the radio buttons the same name so that selecting one will deselect the others. 

Also adding `for` attribute in the label made it possible to select a radio button by just clicking on the label which in my case is the image. 


Then I hide the radio button the css


The “+” sign selector is used to select the elements that are placed immediately after the specified element but not inside the particular elements.


Coudn't load html2canvas.js when I downloaded the library onto my pc but could load it when I used the cdjns on https://cdnjs.com/


* Multiple Generation of Images , but to prevent this I reset the inner HTML , everytime gnerate is click;


* Sharing 
Basically at the time of writing Android and iOS are the major platforms supported, with Chrome on Windows and Chrome OS also working. I've tested on Windows (Chrome + Edge) and Android (Chrome) myself.

* 

Checking for which background the user checked and applying it dynamically to the current background. I tried a lot of approaches which wasn't working. 

I took a step back and try to think through what I want to do in simple steps

1. looked for the default (checked) button
2. listen for any change 
3. look through all the buttons and check which is selected
4. Change the background using the name of the checked button

The above wasn't working , it seems I can only change the radio button when I have another button to use as even listen. I didn't want to do that so I used the class to listen for any change. 

So I will listen when the mouse is over that choose background area

Still not working because, I have to leave the area for event to listen again. but I wanted to listen only when one is selected

1. Detected the selected image, 
2. change the sepia to 0 percent. 
3. change the background to that selected image. 
4. Feel real time changes


SPENT SOME TIME ON WIX DESIGNING THE SITE SO THAT I CAN CODE IT OUT 

### SOCIAL 


### FINAL
The working link to final webpage [WebPage-Final](https://eric-asare.github.io/ConnectionsLab/week3/Inspire!/index.html)


### NEXT STEPS
* Implement make-your-own feature
* Allow user to choose their own photo
* make it a PWA so that it can be installed on the phone
* Add day and night feature, to appeal to all type of users
* Use an image API to generate images so that users can just choose next to get a new one. 
* create custom share buttons for users with incompatible browsers

*Expand to add articles and news /books feature to inform user of goog resources


### RESOURCES
*noteworthy material utilized in service of the research, production and delivery of the project

* quotable API : https://github.com/lukePeavey/quotable 
* warm Colours : https://colorhunt.co/palettes/warm
* mobile-first responsive design : [The Net Ninja](https://www.youtube.com/watch?v=PM3XW_1RAIs) , [Traversy Media](https://www.youtube.com/watch?v=XsEnj-1hG2o)

* htmltoCanvas Library (https://www.youtube.com/watch?v=dPezJKcItuc)
* Amatic Font ( Google Docs)

* [Use images instead of radio buttons] (https://gist.github.com/rcotrina94/7828886)

* StackOverFlow , download code. 

* https://benkaiser.dev/sharing-images-using-the-web-share-api/

* cool css tricks : https://speckyboy.com/advanced-image-hover-effects/

* cool css tricks for other stuff


* show array of images:  https://stackoverflow.com/questions/69960300/i-am-trying-to-show-an-image-from-an-array-of-images-javascript

* regex (https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript)

*https://uxplanet.org/two-types-of-user-motivation-design-to-satisfy-aa9123668f62

* website animations (https://fireart.studio/blog/10-best-website-animation-techniques-for-your-web-design/)

* background image staying as it is(https://www.youtube.com/watch?v=hVdTQWASliE)