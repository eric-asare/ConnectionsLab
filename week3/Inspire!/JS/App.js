
window.addEventListener("load", function () {

    let backgroundImages = [
        " ",
        "images/1.jpeg",
        "images/2.jpeg",
        "images/3.jpeg",
        "images/4.jpeg"
    ]

    console.log("page is loaded");





    document.querySelectorAll('input[name = "bg"]').forEach(item => {
        item.addEventListener('change', (e) => {
            console.log(e.target);
            imageID = e.target.value.replace(/^\D+/g, '');
            document.getElementById("quote__canvas-bg").src = backgroundImages[imageID];
        })
    })




    document.getElementById("generate").addEventListener("click",
        function generate() {
            document.getElementById("render").innerHTML = "";

            html2canvas(document.querySelector("#capture")).then(function (canvas) {
                document.getElementById("render").appendChild(canvas);
            });

        })


    document.getElementById("download-button").addEventListener("click",
        function download() {
            const download = document.getElementById("download-button");
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
        const quoteText = document.querySelector('#quote__canvas-content');
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

    document.querySelector('.show-info').addEventListener('mouseover',() =>{
        document.querySelector('#info-message').style.visibility = "visible";
    })

    document.querySelector('.show-info').addEventListener('mouseout',() =>{
        document.querySelector('#info-message').style.visibility = "hidden";
    })

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random?tags=inspirational|happiness|success&maxLength=100");
        const data = await response.json();
        if (response.ok) {
          // Update DOM elements
          quotationContainer = document.getElementById("quotation");
          quotationContainer.innerHTML = "<span> &#8220; </span>" + data.content + "<span> &#8221; </span>";

          authorContainer = document.getElementById("citation");
          authorContainer.innerHTML = "-" + " " + data.author;

        } else {
          quote.textContent = "Be patient, something went wrong";
          console.log(data);
        }
      }


    
      // Attach an event listener to the `button`
      document.querySelector('.quote-refresh').addEventListener("click", updateQuote);
    
      // call updateQuote once when page loads
      updateQuote();

})


