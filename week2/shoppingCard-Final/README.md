# Shopping Cart Project Documentation 
## Description
I built an interactive shopping cart page (as part of a larger application). I decided to build a shopping cart because it one of the most common feature to have on any commercial website hence useful and easily integrable. 

I want to include two main user interaction
. mouse clicks 
. key presses


Last but not least, I built the page using desktop-first then mobile  because a lot of people shop or visit these commercial sites on their desktop upon research ( i.e 67 percent of Amazon Shoppers prefer to shop using their desktop computer or laptop (CPC Strategy, 2018))


SO THE STEPS ARE
* Build page layout from mockup - HTML
* Style page -CSS
* Remove item on click - JS
* Enter payment details ( name and card number) - JS
* Check out button - JS
* Remove button - JS


### WIREFRAME
I had a  lot of ideas poping up in mind so I drew a couple of wireframes on paper and looked up other UI online to influence the final design and then moved on to paintJS to draw the wireframe. As usual the wireframe takes off most of the work. 

![wireframe](https://eric-asare.github.io/ConnectionsLab/week2/shoppingCard-Final/design/ShoppingCard.png)

### HTML

I started the development by translating the wireframe into HTML. 

I made the card number input type password because I wanted to make the user feel his or her card details are kept confidential and the user not be in a closed space to use the site. You can type in your card details anywhere. This also prevents the inconvenience caused by having to cover the screen with your hands  as a to type your credit card number.

I made the credit card number required so that the user doesn't click checkout without paying.

This was the outcome - [WebPage-HTML](https://eric-asare.github.io/ConnectionsLab/week2/shoppingCard-HTML/index.html)


### CSS
For Styling, 
I first selected my colours. I wanted to use primarily two colours for contrast. 

I created classes to handle a similar set of styles that span across different `div`s.

For responsiveness, 
I made the content of the card into a column instead grid where the user will scroll to the end and checkout after seeing the total charge. 

For the desktop , I used grid instead of flex in the shopping container because I didn't want an evenly distribution. 
Added z index on the card or container for it to look like it is coming off the background.

Made the payment, and price bolder for user to easily see.

### JS
As always , made sure my page is loaded before doing any JS tricks. 

On giving the user feedback,
I wanted to add a redirect page to give the user a "success" feel for checkout but decided to use alert because it is similar to notification giving the same "success" feeling and would also keep the user on the site increasing the chances of buying more products. 

I was also comtemplating whether to change the whole DOM or use an alert. 
I decided to use alert instead of changing the whole DOM because the user might want to look over the purchase item again and determine what's missing to buy more items.

I made sure to personalize the thank you message by using the User's Name so that the user feel welcome.


### FINAL
The working link to final webpage [WebPage-Final](https://eric-asare.github.io/ConnectionsLab/week2/shoppingCard-Final/index.html)

### RESOURCES
<a href="https://www.flaticon.com/free-icons/commerce-and-shopping" title="commerce and shopping icons">Commerce and shopping icons created by Circlon Tech - Flaticon</a>

