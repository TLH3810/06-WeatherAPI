

var weatherApiUrl = 'https://api.openweathermap.org';
var weatherApiKey = '357c53761ecc7f149f068d3e1d074e7d';
//var fiveDayApi = `https://api.openweathermap.org/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`;

//var dailyApi = data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey};

var searchHistory = [];

//download from fivedayapi
//creating variables for the data from the JSON (current day, latitude, longitude, current humidity,windspeed,temp, icon )

//use lat and long from 5dayapi as input for daily api (give current uvi increment i++ for loop for 5 days)

//function for retrieving the current weather data from the OpenWeather API
/////store in veriables the fetch data


let citySearch = document.querySelector("#search-city");
let submitSearch = document.querySelector("#submit-search");
let cityName = ""

/* submitSearch.click(function () {
    event.preventDefault();
    cityName = citySearch.value;
    getWeatherApi(cityName)
}), */
function returnWeatherForecast(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" + weatherApiKey; 
    var date = dayjs().format('M/D/YYYY');
    var name = data.name;
    var weathericon = data.weather.0.icon;
   var tempel = data.main.temp;
   var humidityPer = data.main.humidity;
    var windSpd = data.wind.speed;
    fetch(queryURL)
    .then(function(response){
        return response.json()
    })
    .then(function (data){

    })
    .catch(function(error){
        console.log(error)
    })
    console.log("done")
}

submitSearch.addEventListener("click", function(){
    cityName = citySearch.value;
    console.log(cityName);
    returnWeatherForecast() })

/* let forecastInfo = response.list;

function getWeatherApi(cityName) {
    let fiveDayApi = `https://api.openweathermap.org/api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weatherApiKey}`;
   fetch(fiveDayApi)
   .then(function (res){
       console.log(res.json());

    })
    .then(function (data){
        console.log(city,data);
    })
    .catch(function (err){
        console.log(err);
    });
}  */


/*
function displayCityHistory(){
    console.log('displayHistory')
    let searchHistory = document.querySelector('searchHistory');
    searchHistory.innerHTML = '';
    for (var i = searchHist.length -1; i >=0; i--){
        var button = document.createElement('button');
        button.setAttribute('type','button');
        button.setAttribute('data-search', searchHist[i]);
        button.classList.add('history-button','button-history')
        button.textContent=searchHist[i];

        console.log(searchHist);
        console.log(searchHistory);

    }
} */




/* function getDailyWeather(location) {
    var { lat } = location;
    var { lon } = locaiton;
    var city = location.name

    //var dailyAPI = api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}


    fetch(dailyAPI)
        .then(function (res) { return res.json(); })
        .then(function (data) { renderItems(city, data); })
        .catch(function (err) { console.error(err); })

}
// function for the history list to display from most recent
// function needed to store update local storage history before display
// function to get the search history from local storag
*/
