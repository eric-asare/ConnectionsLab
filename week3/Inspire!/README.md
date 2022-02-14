#  Inspire! Project Documentation 
## Description

Whew! I guess this is the last idea I'll come up with. Interested in the rollercoaster? Read on. 

The hardest part of this project was settling on an idea that would interest me and finding data that would be helpful. 

Often all you need to get the next big project done is a well-chosen inspirational quote. Positive quotes are known to help improve mental health. 


You might want to start your day with an inspirational quote or a quote from some famous author that you admire. . You might be searching for that one quote that always gets you going, relaxed, comforted when you are feeling down. Just as I needed Nelson Mandela to tell me "I never lose, I either win or learn" to continue ideating and finding an API. 

Inspire! is your one-stop place for inspiration You don't have to search all over the web or on group forums for a quote. Come to Inspire!, check out the daily quotes or search your favourite with just a single request. 

Inspire! is a webpage built to take you to the next level. Yes! wherever you want to be. 


Basic Features
1. Daily Quote
2. Search(Request) Your Favourite Quotes

Visualization 
1. Display quotes of an author some cool way using p5.js upon search
--PS: need more ideas for visualization

If I am ambitious, 
I would add a few interaction where
1. The user can create an image out of the quote 
2. Share or download the quote on a single click 


Inspire! is going to be developed using a dataset from an api and p5.js library. 


SO THE STEPS ARE
* Find quote API and make sure it works
* Draw WireFrame
* Build page layout from wireframe - HTML / p5.js ??
* Style page - CSS / p5.js??
* Interactions - JS/ p5.js??

It's obvious I don't know where p5.js fits

### DATA
It took days for me to settle on Inspire!. 

I first thought of reddit as my data source.I had ideas of creating a web page to show who is hiring in EMEA because we are approaching the recruiting season and wanted to make the hiring process easier for college students but couldn't figure out how to pull that off using reddit. 

A food API cross my mind but didn't give it much thought. 

Another idea I had was to create a webpage for finding and making friends. Using reddit data, I present users with their contact information on a map so they can get in touch with people around the world. Still wasn't sure how to get real contact details of users of a subreddit. 

Then the idea of creating a webpage to show the meme king of the day - the person whose meme received a lot of reaction on Reddit - came to me.

But I thought it would be fun if I displayed trending memes and gave the user the option to search for memes to share with friends during a conversation online. It was easy to find APIs to generate random memes, but finding an API that searched for a specific type of meme took several hours of searching. I decided to use two or three APIs to achieve both functionalities. That is when I stumbled upon api.quotable.io. 

My main goal behind the meme app was to improve user's mood. Here I found api.quotable.io. which serves the same purpose and had great documentation on github.This API was also free and open source. 

## BIG LESSON
To avoid wasting a lot of hours, 
Never rush in planning the an application fully with wireframes etc without checking in the browser whether the data source works as you intend it to. 

### WIREFRAME
 The simple wireframe I created is below, will update when I know fully how p5.js can transform the data . 

![wireframe](https://eric-asare.github.io/ConnectionsLab/week3/Inspire!/design/inspire!.png)

### HTML

Created a simple `div` to hold quote and search input bar for user to query data. And lastly a `div` to hold search results


### STYLING
For Styling,

I used a warm colour palettes for page background, the daily quote background, and the search results background. 

I did some styling in the JS, want to move them to the CSS - not sure. 


I am thinking of having a beautiful card to hold the quote. 
A nice search tab, some beautiful buttons for tags( better than what I made for shopping Card), warm colours to stimulate good mood.


### JS
I check for user input (checked whether the user typed something or not)  for API call.

The daily quote is fetched without user input. Thinking of hiding it when user search for a specific quote. 

Thinking of indicating the tags of each quote from user search. 

Still don't know how p5.js would fit in the grand design but hoping , I am able to do some cool text visualization, cards, images.

The main user interaction I achieve was search by text. 

The user interfaces I'm thinking of adding to my page is 
1. Search by tags like school, tech, sports etc
2. Potential Ones listed under ambitious above
3. Proper Error Message ( either to show user something similar to searched or say try another one)



### FINAL
The working link to final webpage [WebPage-Final](https://eric-asare.github.io/ConnectionsLab/week3/Inspire!/index.html)


### NEXT STEPS
* Update WireFrame if needed
* Build page layout from wireframe - HTML / p5.js ??
* Style page - CSS / p5.js??
* Final Interactions - JS/ p5.js??

### RESOURCES
quotable API : https://github.com/lukePeavey/quotable 
warm Colours : https://colorhunt.co/palettes/warm