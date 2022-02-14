
window.addEventListener("load", function () {

    console.log("page is loaded");

    searchInput = document.getElementById('search-input');

    searchInput.addEventListener('change', (e) => {


        let value = e.target.value;
        let searchResults = document.getElementById('search-result');

        if (value && value.trim().length > 0) {
            // value = value.trim.toLowerCase();
            apiURL = "https://api.quotable.io/";
            endPoint = "search/quotes?query=";
            // console.log(value);

            fetch(apiURL + endPoint + value)
                .then((response) => response.json())
                .then((data) => {
                    let results = data.results;

                    for (let i = 0; i < results.length; i++) {
                        let container = document.createElement('div');
                        let mainQuote = document.createElement('p');
                        mainQuote.innerHTML = results[i].content;

                        let quoteAuthor = document.createElement('p');
                        quoteAuthor.innerHTML = results[i].author;
                        quoteAuthor.style.fontWeight = 'bold';

                        container.appendChild(mainQuote);
                        container.appendChild(quoteAuthor);

                        searchResults.appendChild(container)
                        searchResults.style.backgroundColor = '#FC4F4F'
                        console.log(results[i].author)
                    }
                })
                .catch(err => {
                    console.error(err);
                });

        }
    })

    fetch("https://api.quotable.io/random/")
        .then((response) => response.json())
        .then((data) => {
            authorName = data.author;

            card = document.getElementById("quote-container");
            quote = document.createElement('p');
            quote.innerHTML = data.content;

            quoteAuthor = document.createElement('p');
            quoteAuthor.innerHTML = authorName;

            card.appendChild(quote);
            card.appendChild(quoteAuthor);

            console.log(data)
        })
        .catch(err => {
            console.error(err);
        });


})


