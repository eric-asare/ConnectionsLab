#  Node-Express App Documentation 

## Description

a Node-Express app that serves super cars web page. This webpage uses a custom API fetched from my own server (a custom cars API). The API uses .params **or** query.

---
>  Lover of super cars? Find what you can afford.
---

## Production
  * ### The Plan
        1. Decide on data to serve on custom API
        2. Draw wireframe of webpage
        3. Build custom API
        4. Code up wireframe - HTML
        5. Make Interactions work - JS
        6. Add Minimal Styling - CSS
        7. Ensure it's mobile responsive - CSS

   * ### The WireFrame
   
       ![Super Cars Site Wireframe](https://eric-asare.github.io/ConnectionsLab/projectOne/design/superCarsWireframe.png)
         

    * ### Data, Layout, Styling , Interaction Decisions
        * Super Cars are cool but prices can be too much. So it's important you find the one you can afford thus the need for a price selection box. 
        * Created my super cars data by including image, name and price of each car. Using 3 cars. 
        * Most car brand websites do not show the prices upfront so I decided to include an element of that in my webpage
        * Use flex to ensure device responsiveness
        * No need to include a search feature to use params. It doesn't make sense since you have only 3 items in your dataset
        * webpage fetches using query even though params is implemented 
        * Chose a luxury font

## Challenges & Solutions
   * Entered npm start after navigating into my project folder but an error occured. Remember I have to first type npm init then include the start json info. 
   * Not sure how images are served over an API. Was deciding between using URL or local storage, created my own local db where I hold the car images
        * oops , got the network error, 404,images not found.Decided to host my images on (imgur) so that I can use the url instead
        * still not working, tried with placekitten and it's working. Will look for placekitten for cars. Found none.
        * Decided to try github pages.Yess, github pages is working.
   * made the price a string (eg. $50000). The query comparison wasn't working as expected so changed it to a number
   * labels were not appearing as title case, tried looking at JavaScript equivalent of toTitleCase - was complicated, used CSS Transform instead. 
   * could not call my own api with the query I intended to - was returning 404 error. Silly me, there was no error, I was not console logging the data as I thought I was doing. 
   * How do I get the key of the json data I am getting. Quick google search. Good search but no need for it
   * Was repeating code so created a function called populate to fill the DOM with the data fetched
   * The images added was duplicating so I make sure to clear the `div`s before populating
   
  
      

## Lessons
  * Wireframes indeed make life easy. I can visualize how to even build the website using only flex just from the wireframe.
  * Not hard to create your own API if you know the basics
  * No need to upload node modules, whoever clone the project can easily install all dependencies
  * Adding the attribute `selected` to an option selects it into focus
  * Always think of other ways to solve a problem you are facing, maybe using CSS either than JS

##  Next Steps
  * Serve more data and user interaction
  * Use smaller images to make styling better


## Refrences & Resources
* Class notes (https://github.com/MathuraMG/ConnectionsLabSpring22/tree/master/Week_6_Node_Express)
* Images (https://unsplash.com/)
* Image Hosting Site (https://imgur.com/)
* Object.keys Javascript (https://infinitbility.com/how-to-get-key-and-value-from-json-object-in-javascript)
* Card Inspiration (https://freefrontend.com/css-cards/)
* Hover Effects (https://github.com/IanLunn/Hover)
* Luxury Fonts (https://www.madebychroma.com/typography/10-elegant-google-display-fonts-for-your-brand/)




