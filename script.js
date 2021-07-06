let city = $("#search-input").val();

const apiKey = '6e0a6f003c0ba257f116574ef04963ac';

let date = new Date();

$("#search-input").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

$("#searchBtn").on("click", function() {

  $("#forecast-one").addClass("show");

  
  city = $("#search-input").val();
  
 
  $("#search-input").val("");  


const queryURL = 'api.openweathermap.org/data/2.5/forecast?q=' + city + apiKey;

  
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function (response){

    console.log(response);

    console.log(response.name);
    console.log(response.weather[0].icon)

    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    console.log(Math.floor(tempF));

    console.log(response.main.humidity);

    console.log(response.wind.speed);

    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();

    })
  });

  function makeList() {
    let listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
  }

  function getCurrentConditions (response) {

    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    tempF = Math.floor(tempF);

    $('#currentCity').empty();
//city now
//city forecast
//temperature
//uv index
//humidity 
//wind
const card = $('<div>').addClass('card');
const cardBody = $("<div>").addClass("card-body");
const city = $('<h2>').addClass('card-title').text(response.name);
const date = $("<h2>").addClass("card-title").text(date.toLocaleDateString('en-US'));
const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
//var uvIndex = $('#uv-index');
//const uvIndex = $('<p>').addClass('card-text current-uvIndex').text("Current UV Index: ")
const humidity = $('<p>').addClass('card-text current-humidity').text("It Feels Like: " + response.main.humidity + '%');
const wind = $('<p>').addClass('card-text current-wind').text("Feel the Breeze: " + response.wind.speed + " MPH");
const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");



city.append(cityDate, image)
cardBody.append(city, temperature, humidity, wind);
card.append(cardBody);
$("#currentCity").append(card);

};


function getTodaysForecast() {
  $.ajax({
    url: 'api.openweathermap.org/data/2.5/forecast?q=' + city + apiKey,
    method: 'GET'
  }).then(function (response) {
    $('#forecast').empty();

    let results = response.list;

    for (let i = 0; i < results.length; i++) {
      let day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
         console.log(day);
      let hour = results[i].dt_txt.split('-')[2].split('-')[1];
        console.log(hour);
      if (results[i]dt_txt.indexOf('12:00:00') !== -1)
      {
    let temp = (results[i].main.temp - 273.15) * 1.80 + 32;
    let tempF = Math.floor(temp);

        const card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white";
        const cardBody = $("<div>").addClass("card-body p-3 forecastBody");
        const date = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
        const temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
        const humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");

        const image = $('<img>').attr('src', 'http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={API key}')

        card.Body.append(cityDate, image, temperature, humidity);
        card.append(cardBody);
        $('#forecast').append(card);
      }
    }
 
//refresh page/clear page 
//function clearResults() {
 // event.preventDefault();
  //city = [];
 // localStorage.removeItem('city');
  //document.location.reload();



