// Confirmation Linked
console.log("weather API connected.");

$("#citysub").text("Search City");
$("#showGif").hide();

// Onclick taking city name and calling weather data.  
$("#citysub").click(function(){

function cityCall() {
    var city = document.getElementById("city").value;
    var key2 = "851f7df26e3e439be0303240ed7125b9";
    var openWeatherCity = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&APPID=" + key2 + "&units=imperial";

    $.ajax({
        url: openWeatherCity,
        method: "GET",
    }).then(function (response) {
        cityTemperature = response.main.temp;
        cityForcast = response.weather[0].description;
        cityMin = response.main.temp_min;
        cityMax = response.main.temp_max;
        //console.log(response);
        console.log("Your city: " + city);
        console.log("Current Temperature: " + cityTemperature);
        console.log("Forcast: " + cityForcast);
        console.log("Low of: " + cityMin);
        console.log("High of: " + cityMax);

 // Conditionals that will call a specific gif depending on the weather condition. 
        if(cityForcast == "clear sky"){
            console.log("Stick your arm outside. I'd say so long as its 60-75: bring a light jacket. 75 and up go off! ");
            gifTerm = "russell westbrook and cameron payne"
        }
        else if(cityForcast == "overcast clouds"){
            console.log("could be ard stick your hand outside and see what it feel like.");
            gifTerm ="alonzo mourning thinking"
        }
        else if(cityForcast == "few clouds"){
            console.log("ehh... Wish it were sunny but whatev");
            gifTerm ="season 2 whatever by dear white people netflix"
        }
        else if(cityForcast == "scattered clouds"){
            console.log("");
            gifTerm="shaq breaking backboard"
        }
        else if(cityForcast == "broken clouds"){
            console.log("broken clouds typically means that a storm has passed. Hopefully good weather is on the horizon!");
            gifTerm ="solange a seat at the table dont touch my hair"
        }
        else if(cityForcast == "shower rain"){
            console.log("");
            gifTerm= "raining pro bowl gif by nfl"
        }
        else if(cityForcast== "rain"){
            console.log();
            gifTerm= "al roker rain"
        }
        else if(cityForcast== "thunderstrom"){
            console.log();
            gifTerm= "halle berry storm gif by 20th century fox home entertainment"
        }
        else if(cityForcast== "snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "mist"){
            console.log();
            gifTerm= ""
        }

        // More descriptive weather conditions.

        else if(cityForcast== "light intensity drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "heavy intensity drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "light intensity drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "drizzle rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "heavy intensity drizzle rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "shower rain and drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "heavy shower rain and drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "shower drizzle"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "light rain"){
            console.log();
            gifTerm= "rihanna umbrella"
        }
        else if(cityForcast== "moderate rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "heavy intensity rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "very heavy rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "extreme rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "freezing rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "light intensity shower rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "shower rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "heavy intensity shower rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "ragged shower rain"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "light snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Heavy snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Sleet"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Light shower sleet"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Shower sleet"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Light rain and snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Rain and snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Light shower snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Shower snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Heavy shower snow"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Mist"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Smoke"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "haze"){
            console.log("");
            gifTerm="snoop dogg smoking"
        }
        else if(cityForcast== "sand/ dust whirls"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "fog"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "sand"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Dust"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "volcanic ash"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "squalls"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "tornado"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "clear sky"){
            console.log();
            gifTerm= ""
        }
        else if(cityForcast== "Ash"){
            console.log();
            gifTerm= ""
        }
  
        $("#weatherCity").text("in " + city);
        $("#weatherTemp").text(cityTemperature);
        $("#weatherDescript").text(cityForcast);
        //$("#tempLow").text("Low: " + cityMin)
        //$("#tempHigh").text("High: " + cityMax)
        $("#lowhigh").text("L: " +cityMin + " | " + "H: " + cityMax);
        giphyData()
       
    });

    $("#citysub").text("Reset Search");    
    $("#citysub").click(function () {      
        location.reload();    
    });

};



cityCall()
});

