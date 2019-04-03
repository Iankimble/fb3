console.log("giphy API connected.");

function giphyData() {
    var searchTerm1 = cityForcast
    var key = "vGqNVOHVpTq2I38yL5iqbi3Zpg6HYzEB"

    var giphy1 = "http://api.giphy.com/v1/gifs/search?q=" + gifTerm + "&api_key=" + key;
    $.ajax({
        url: giphy1,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        // Giphy api that calls Specific gif for each gif term/ weather condition

        if (gifTerm == "shaq breaking backboard") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })

        }
        else if (gifTerm == "russell westbrook and cameron payne") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }

        else if (gifTerm == "alonzo mourning thinking") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }
        else if (gifTerm == "solange a seat at the table dont touch my hair") {
            console.log(gifimg = response.data[4].images.original.url);
            giphyResult = gifimg = response.data[4].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }
        else if (gifTerm == "season 2 whatever by dear white people netflix") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }
        else if (gifTerm == "rihanna umbrella") {
            console.log(gifimg = response.data[2].images.original.url);
            giphyResult = gifimg = response.data[2].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }
        else if (gifTerm == "snoop dogg smoking") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }

        else if (gifTerm == "raining probowl gif by nfl") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }

        else if (gifTerm == "al roker rain") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }

        else if (gifTerm == "halle berry storm gif by 20th century fox home entertainment") {
            console.log(gifimg = response.data[0].images.original.url);
            giphyResult = gifimg = response.data[0].images.original.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
            $("#post").append(gifImage);
            $("#showGif").show();
            $("#showGif").click(function () {
            })
        }

        /*
            randomGif = gifimg[Math.floor(Math.random() * gifimg.length)];
            giphyResult = randomGif.images.fixed_height.url;
            gifImage = $("<img>")
            gifImage.attr("src", giphyResult);
        
            $("#post").append(gifImage);
            console.log();
        
            $("#showGif").show();
            $("#showGif").click(function () {
                
                console.log("clicked");
            })
        */
        console.log(searchTerm1)
    });


};

