
window.addEventListener("load", function () {

    let backgroundImages = [
        "images/background1.jpeg",
        "images/background2.jpeg",
        "images/background3.jpeg",
        "images/background4.jpeg"
    ]

    console.log("page is loaded");



    document.querySelector('input[name = "bg"]:checked').addEventListener('change', () => {
        let radioButtons = document.querySelectorAll('input[name = "bg"]');
        console.log(radioButtons);
    })


    document.querySelector('radio').addEventListener('change', () => {
        let checkRadio = document.querySelector('input[name = "bg"]:checked');

        if (checkRadio != null) {
            console.log(checkRadio.value);
        }
    }, false);



    document.getElementById("generate").addEventListener("click",
        function generate() {
            document.getElementById("render").innerHTML = "";

            html2canvas(document.querySelector("#capture")).then(function (canvas) {
                document.getElementById("render").appendChild(canvas);
            });

        })


    document.getElementById("download-button").addEventListener("click",
        function download() {
            const download = document.getElementById("download");
            let image = document.querySelector("canvas").toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            download.setAttribute("href", image);

        });


    document.getElementById('share-img').addEventListener('click',
        async function shareCanvas() {

            const canvasElement = document.querySelector('canvas');
            console.log(canvasElement);

            // show errow that no canvas available

            const dataUrl = canvasElement.toDataURL();
            const blob = await (await fetch(dataUrl)).blob();

            console.log(blob);
            const filesArray = [
                new File(
                    [blob],
                    'quote.jpg',
                    {
                        type: blob.type,
                        lastModified: new Date().getTime()
                    }
                )
            ];
            const shareData = {
                files: filesArray,
            };
            navigator.share(shareData);
        }

    )






    document.querySelector("textarea").addEventListener("keyup", (e) => {
        const quoteText = document.querySelector('#h1-start');
        console.log(quoteText);
        console.log(e.target.value);


        if (e.target.value != "") {
            quoteText.innerHTML = e.target.value;
        }

        else {
            quoteText.innerHTML = "Start Typing";
        }
    })





    // searchInput = document.getElementById('search-input');

    // searchInput.addEventListener('change', (e) => {


    //     let value = e.target.value;
    //     let searchResults = document.getElementById('search-result');

    //     if (value && value.trim().length > 0) {
    //         // value = value.trim.toLowerCase();
    //         apiURL = "https://api.quotable.io/";
    //         endPoint = "search/quotes?query=";
    //         // console.log(value);

    //         fetch(apiURL + endPoint + value)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 let results = data.results;

    //                 for (let i = 0; i < results.length; i++) {
    //                     let container = document.createElement('div');
    //                     let mainQuote = document.createElement('p');
    //                     mainQuote.innerHTML = results[i].content;

    //                     let quoteAuthor = document.createElement('p');
    //                     quoteAuthor.innerHTML = results[i].author;
    //                     quoteAuthor.style.fontWeight = 'bold';

    //                     container.appendChild(mainQuote);
    //                     container.appendChild(quoteAuthor);

    //                     searchResults.appendChild(container)
    //                     searchResults.style.backgroundColor = '#FC4F4F'
    //                     console.log(results[i].author)
    //                 }
    //             })
    //             .catch(err => {
    //                 console.error(err);
    //             });

    //     }
    // })



    fetch("https://api.quotable.io/random/")
        .then((response) => response.json())
        .then((data) => {
            authorName = data.author;

            card = document.getElementById("quote-container");
            quote = document.createElement('p');
            quote.innerHTML = data.content;

            quoteAuthor = document.createElement('p');
            quoteAuthor.innerHTML = "&#x2014;" + authorName + "" + "&#x2014;";

            card.appendChild(quote);
            card.appendChild(quoteAuthor);

            console.log(data)
        })
        .catch(err => {
            console.error(err);
        });


})


