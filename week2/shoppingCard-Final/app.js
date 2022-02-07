/*
 * 1. Get User NAME for thank you message when checkout is clicked
 * 2. Remove item from cart keeping track of total price
 */

 window.addEventListener('load', function() {
    let userName = "";
    let userNameBox = document.getElementById('name');
    let form = document.getElementById('form');

    let removeFirstItemButton = document.getElementById('remove-one');
    let removeSecondItemButton = document.getElementById('remove-two');
    let removeThirdItemButton = document.getElementById('remove-three');

    let totalPrice = document.getElementById('total-price');

    // mini database
    let itemOnePrice = parseInt(document.getElementById('item-one-price').innerText);
    let itemTwoPrice = parseInt(document.getElementById('item-two-price').innerText);
    let itemThreePrice = parseInt(document.getElementById('item-three-price').innerText);

    sum = itemOnePrice + itemTwoPrice + itemThreePrice
    totalPrice.innerHTML = "Total Price =  $" + sum;

  

    userNameBox.addEventListener('change', function(e) {
      userName = e.target.value;
    
  })

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        message = "Thank you" + " " +  userName + " " + "for visiting";
        alert(message);
    })


    removeFirstItemButton.addEventListener('click', function() {
        let firstItem = document.getElementById('item-one');
        firstItem.style.display = 'None';
        sum -= itemOnePrice;
        totalPrice.innerHTML = "Total Price =  $" + sum;
    })

    removeSecondItemButton.addEventListener('click', function() {
        let secondItem = document.getElementById('item-two');
        secondItem.style.display = 'None';
        sum -= itemTwoPrice;
        totalPrice.innerHTML = "Total Price =  $" + sum;

    })


    removeThirdItemButton.addEventListener('click', function() {
        let thirdItem = document.getElementById('item-three');
        thirdItem.style.display = 'None';
        sum-= itemThreePrice;
        totalPrice.innerHTML = "Total Price =  $" + sum;
    })
    
 })

   