window.addEventListener("load", function() {

    let backgroundImages = [
        " ",
        "images/1.jpeg",
        "images/2.jpeg",
        "images/3.jpeg",
        "images/4.jpeg"
    ]



    // SHOW INFO MESSAGE UPON HOVER
    document.querySelector('.landing__top--show-info').addEventListener('mouseover', () => {
        document.querySelector('#info-message').style.visibility = "visible";
    })

    document.querySelector('.landing__top--show-info').addEventListener('mouseout', () => {
        document.querySelector('#info-message').style.visibility = "hidden";
    })

    //  DESIGN IMAGE SELECTION AND PREVIEW 
    document.querySelectorAll('input[name = "bg"]').forEach(item => {
        item.addEventListener('change', (e) => {
            console.log(e.target);

            // Look for the number in the string
            imageID = e.target.value.replace(/^\D+/g, '');
            document.getElementById("design__canvas-bg").src = backgroundImages[imageID];
        })
    })

    // COLOR PICKER
    document.getElementById("font-color").addEventListener("input", (e) => {
        document.getElementById("design__canvas-content").style.color = e.target.value;

    });


    // REAL TIME TEXT ENTRY 
    document.querySelector("textarea").addEventListener("keyup", (e) => {
        const quoteText = document.querySelector('#design__canvas-content');
        console.log(quoteText);
        console.log(e.target.value);


        if (e.target.value != "") {
            quoteText.innerHTML = e.target.value;
        } else {
            quoteText.innerHTML = "Start Typing";
        }
    })



    // GENERATE CANVAS
    document.getElementById("generate").addEventListener("click",
        function generate() {
            document.getElementById("render").innerHTML = "";

            html2canvas(document.querySelector("#capture")).then(function(canvas) {
                document.getElementById("render").appendChild(canvas);
            });

        })


    // DOWNLOAD CANVAS
    document.getElementById("download-button").addEventListener("click",
        function download() {
            const download = document.getElementById("download-button");


            try {
                let image = document.querySelector("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
                download.setAttribute("href", image);
            } catch (err) {
                alert(' Design a graphic quote first before clicking Download');
            }
        });



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


    // UPDATE CODE UPON REFRESH
    async function updateQuote() {
        // Fetch a quote from the Quotable API
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
    document.querySelector('.landing__content-message--refresh').addEventListener("click", updateQuote);

    // call updateQuote once when page loads
    updateQuote();

})