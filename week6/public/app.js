function populate(data) {
    // populate the showcase images and labels
    let showcaseImages = document.querySelector('.showcase__images');
    let showcaseLabels = document.querySelector('.showcase__labels');

    showcaseImages.innerHTML = "";
    showcaseLabels.innerHTML = "";

    for (car in data) {
        img = document.createElement('img');
        paragraph = document.createElement('p');

        img.src = data[car].image;
        img.alt = car;

        paragraph.innerText = car

        showcaseImages.appendChild(img);
        showcaseLabels.appendChild(paragraph);
    }

}




window.addEventListener("load", function() {

    fetch("/cars")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            populate(data);
        })

    document.getElementById('price-select').addEventListener('change', (e) => {

        url = "/cars";
        endPoint = "?priceSmallerThan=";
        query = e.target.value;

        path = url + endPoint + query;

        fetch(path)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                populate(data);
            })

    })
})