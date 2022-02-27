#  Inspire! Project Documentation 

![Landing Page](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/landingPage2.png)

## Website
The working link to final webpage [WebPage-Final](https://eric-asare.github.io/ConnectionsLab/projectOne/index.html)

## Description

Inspire! is your one-stop shop for inspirational quotes. Don't waste your time searching the web or chat groups for a quote. Visit Inspire!, check the daily mood booster, find a specific quote or create your own to save or share with friends. 

Inspire! is a free, flexible, encouraging,and fun  webpage that is specially designed for you - the quotes lover. 

**Free** - This site has no ads, 100% free. No hourly limits. No restrictions

**Flexible , Fast and Fun** - This site is for you whether you just want a quick glance at a quote to brighten your day, whether you want to make your own to share or download or if you just want to browse quotes. 

*Inspire* -  Be inspired to inspire! Read free inspirational quotes and have fun creating your  to save and share. 

## Inspiration , Concept & Context

---

>  Oftentimes, all you need to get the next big project done is a well-chosen      inspirational quote. 
> Positive quotes are known to help improve mental health. 
>
> -- Eric (CTO, Inspire!)

---

## Production
   * ### The Plan
   I will be launching the site in two phases. Initially, I will roll out the quick-mood-boosters and make-your-own features, then later I will implement the find-your-inspiration feature.

   * ### The WireFrames
         I went through multiple design phases and sketches of the webpage :  Initial Design, Updated Design with User Journey, Layout Sketches.

        <table>
        <tr>
        <th> Initial Design </th>
        <th> Updated Design with User Journey </th>
        </tr>
        <tr>
        <td>

       ![Initial Design](https://eric-asare.github.io/ConnectionsLab/projectOne/design/inspire!.png)

        </td>
        <td>

        ![Updated Design with User Journey](https://eric-asare.github.io/ConnectionsLab/projectOne/design/userJourney.png)

        </td>
        </tr>
        </table>

        **Layout Sketches**
        ![Layout Sketch](https://eric-asare.github.io/ConnectionsLab/projectOne/design/layoutSketches.png)

  
   * ### The Steps 
      * Create Landing Page 
         * Transform Wireframe to webpage - HTML
         * Style Homepage - CSS
         * Quick-Mood-Booster Feature - JS (API and Data)
         * Create & Info Buttons - JS

      * Implement make-your-own feature
         * Transform Wireframe to webpage - HTML
         * Style page - CSS
         * Taking user's quote & font color- JS
         * Choosing background - JS
         * Create button to transform quote and selected background into graphic quote - JS
         * Share & Save button - JS


      * Create Footer
         
   * ### Design Decisions

       * #### User Interface & Interaction
          * For the landing page: 
             I wanted it to hold enough information with less distracting features to appeal to the user who didn't have much time at hand but just wanted to glance at a quote or browse through different inspirational quotes. 

             - Chose 2 main colours for the best contrast ( black for background and green for the quote) and 2 other colours (white to contrast green and purple for additional info)


             Thus the `quick mood booster` (main component to inspire the user) is positioned in the middle of the landing page, The `refresh` and the `info` icons positioned on the top right and bottom right. These positions seems inituitive as to where a user will look for these features upon landing on the page. The `refresh` as it means intituively will change the quote in the middle upon click. 

             The `create` was intentional placed on the bottom left to match the position of the logo and more importantly not to distract the user from the quick mood booster in the middle. The `hand pointing down` seems subtle but was added to indicate to the user that the page will go down if pressed. 

             ![Landing Page](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/landingPage.png)


             The `info` will show the user information about how to interact with the page upon hover. 

             ![Info Shot](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/infoShot2.png)

            
            The `logo` was designed specially to match the colors on the landing page and name of the project

            ![Logo](https://eric-asare.github.io/ConnectionsLab/projectOne/design/inspire-logo.png)

          

            
          * For make-your-own (create quote) feature:
            I wanted the user to feel that they have a lot of room and options to explore and be creative. 


            The `header `for this section says it all: explore your inner creativity. 

            Thus the reason for creating the `image selection and preview panel`, the `text editor`,the `color picker` for font color.

            A `create button` to see their final button and an option to share and save it. 

            All these goes to make the page flexible and fun. 

            I divided the user experience for this section into the creation and aftermath. 

            For the creation experience, the user will see and interact with the image selection and preview panel, the text area, and the color picker. 

             ![Creativity Page](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/creativityPage2.png)

            The aftermath of the creation, the user will be taken to a page where the user will see and interact with the `share and save buttons`. 

<table>
<tr>
<th> Initial Design </th>
<th> Updated Design with User Journey </th>
</tr>
<tr>
<td>

![Share Page](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/sharePage.png)

</td>
<td>

![Download shot](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/downloadShot.png)
</td>
</tr>
</table>

           
        * It is worth noting that the whole site is a `one page site, scrollable but have buttons to help user jump between sections` make the webpage more flexible and fun to interact with. 

   * ### Technical Decisions
       * #### Layout - HTML
           * Using `main` and `footer` tag to make locating the main content easier for accessibility purposes
           * Divided the main page into three sections : landing page, the design (create your own) and the preview sections


       * #### Styling - CSS
            * Used font-awesome icons to make styling easier
            * Used google fonts
            * 

       * #### Interaction - JS
            * Alert user to create a graphic quote before pressing the share button. 

            * Tell User browser is not supported if share is clicked for unsupported browser

            * Tell User to design a graphic quote first before pressing download

## Challenges & Solutions
   * #### Data & APIs & Libraries
     * Getting Quotes that were not neccessarily inspirational 
         - Specified the API REQUEST by calling for not just a random quote but quotes with tags of inspirational success or happiness. 
      ``` javascript

        const response = await fetch("https://api.quotable.io/random?tags=inspirational|happiness|success&maxLength=100");
        const data = await response.json();

      ```
    
     * Really Long Quotes disrupting design 
         - Limited the API to request 10 to 30 word which is easy to read and not overwhelming the user
    
     * Using html2canvas.js
         - Coudn't load html2canvas.js when I downloaded the library onto my pc but could load it when I used the cdjns on https://cdnjs.com/ to import it. 

      ```html

    <!-- HTML2CANVAS LIBRARY -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


      ```

   * #### Layout - HTML
      * Showcase ( Landing Page)
        - The content on the landing page were overflowing so I made `div` with viewheight (`vh`) of 100%. This prevented showcase page from overflowing into the quote (creativity) section 
     ``` css
         .landing__background {
         height: 100vh;
           }

     ```
     <table>
     <tr>
     <th> Overflow Problem </th>
     <th> Overflow Solved</th>
     </tr>
     <tr>
     <td>

     ![Overflow Problem](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/showcaseOverflow.png)

     </td>
     <td>

     ![Overflow Solved](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/overflowSolved.png)

     </td>
     </tr>
     </table>

   * #### Styling - CSS
        * Image Selection Panel 
            * Making the user select only one of the images at a time
              - One challenge I run into was making all the four radio buttons act as one. selecting one will deselect the other. I learnt a good trick to give all the radio buttons the same name so that selecting one will deselect the others. 
             * Making the radio buttons appear as images and not ugly radio buttons
             
```css
        
.design__background-image-selector [type=radio] {
    display: none;
}

.design__background-image-selector [type=radio]+img {
    cursor: pointer;
}

.design__background-image-selector img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.design__background-image-selector [type=radio]:checked+img {
    outline: 2px solid red;
}

```

   * #### Interaction - JS
   * Real Time Image Selection Preview
        - Checking for which background the user selected and applying it dynamically to the current background. I tried a lot of approaches which wasn't working. 

            I took a step back and try to think through what I want to do in simple steps

            1. looked for the default (checked) button
            2. listen for any change 
            3. look through all the buttons and check which is selected
            4. Change the background using the name of the checked button

            The above wasn't working , it seems I can only change the radio button when I have another button to use as event listener. 

            - what worked was listening to each radio button ( images to be selected) and if one of the radio buttons changes it state, I use the name of the changed radio button to set the background of the canvas.


``` javascript

    //  DESIGN IMAGE SELECTION AND PREVIEW 
    document.querySelectorAll('input[name = "bg"]').forEach(item => {
        item.addEventListener('change', (e) => {
            console.log(e.target);

            // Look for the number in the string
            imageID = e.target.value.replace(/^\D+/g, '');
            document.getElementById("design__canvas-bg").src = backgroundImages[imageID];
        })
    })


```
        
   * Multiple creation of the canvas file when create button is clicked. 
      - To prevent this I reset the inner HTML , everytime create button is click;

``` javascript

    // GENERATE CANVAS
    document.getElementById("generate").addEventListener("click",
        function generate() {
            document.getElementById("render").innerHTML = "";

            html2canvas(document.querySelector("#capture")).then(canvas => {
                document.getElementById("render").appendChild(canvas);
            });

        })


```
   * Sharing
      - The Web Share API will show the user all the sharing apps on their device for the user to select one 
      - The sharing API was not working on Chrome but after researching I found out Android and iOS are the major platforms supported, Safari working. So tested the sharing option on Safari. 


``` javascript

    // SHARE CANVAS

    document.getElementById('share-img').addEventListener('click',
        async function shareCanvas() {

            const canvasElement = document.querySelector('canvas');
            console.log(canvasElement);

            // show errow that no canvas available

            try {
                const dataUrl = canvasElement.toDataURL();
            } catch (err) {
                alert('Click on Create button above to generate Graphic Quote');
            }

            try {
                const blob = await (await fetch(dataUrl)).blob();
            } catch (err) {
                alert('Your browser does not support direct sharing');
            }

            const filesArray = [
                new File(
                    [blob],
                    'design.jpg', {
                        type: blob.type,
                        lastModified: new Date().getTime()
                    }
                )
            ];
            const shareData = {
                files: filesArray,
            };

            try {
                await navigator.share(shareData)
                console.log('shared successfully');
            } catch (err) {
                alert('Your browser does not support direct sharing');
            }
        }

    )


```
  
   * Canvas Preview Upon clicking Create not showing as expected (works on local machine but not after uploading on github - update : worked on Safari browser)
      - It seems I have to add padding on the html for the image to show and that distorts the overall layout - got pretty stressed about this and stopped working on it. Leading it for future iterations

     <table>
     <tr>
     <th> 10px Padding </th>
     <th> More padding </th>
     </tr>
     <tr>
     <td>

      ![Share Page](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/previewWrong2.png)

      </td>
      <td>

     ![Download shot](https://eric-asare.github.io/ConnectionsLab/projectOne/images/documentationImages/previewWrong1.png)

     </td>
     </tr>
     </table>

        ```html
        <div class="design__canvas" id="capture" style="padding:20px">
                    <h2 id="design__canvas-content">Start Typing</h2>
                    <img id="design__canvas-bg" src="images/background1.jpeg" alt="man with stretched arms in a sunset">
         </div>
       ```


## Lessons
  * #### Technical & Design
  - adding `for` attribute in the `label` made it possible to select a radio button by just clicking on the label which in my case is the image. 

  - In CSS 
    The “+” sign selector is used to select the elements that are placed immediately after the specified element but not inside the particular elements.

 - In JS, 
    You can use try and except to handle errors. 


  * #### General
  - Never understimate the power of googling. Seen an error, have an issue, type into the google search bar and you would be surprised someone also had a similar problem sometime ago. 

##  Next Steps
  * Create a robust layout using only `flex` making it mobile friendly and make canvas preview work
  * Use an image API to generate images so that users can just choose next to get a new one. 
  * Create custom share buttons for users with incompatible browsers
  * Expand to add articles and news /books feature to inform user of good inspirational resources
  * Implement the find-your-inspiration feature.


## Refrences & Resources
* Noteworthy material utilized in service of the research, production and delivery of the project

* quotable API : https://github.com/lukePeavey/quotable 

* Pallete :  https://colorhunt.co/palettes/green-purple-orange, https://colorhunt.co/palette/2c272e753188e599349ae66e

* Use images instead of radio buttons (https://gist.github.com/rcotrina94/7828886) 

* htmltoCanvas Library (https://html2canvas.hertzen.com/configuration)

* Regex (https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript)


* Background image staying as it is(https://www.youtube.com/watch?v=hVdTQWASliE)

* Web share API ( https://benkaiser.dev/sharing-images-using-the-web-share-api/)

* Used contrasting color from (https://app.contrast-finder.org/?lang=en)



