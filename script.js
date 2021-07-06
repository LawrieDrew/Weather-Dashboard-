//city now
//city forecast
//temperature
//uv index
//humidity 
//wind
const card= $('<div>').addClass('card');
const city = $('<h1>').addClass('card-title').text(response.name);
const Date = moment('<h1>').format('ddd MMMM DD' + ',' + 'YYYY');
const temperature = document.querySelector('.temperature');
var uvIndex = $('#uv-index');
//const uvIndex = $('').addClass('card-text current-uvIndex').text("Current UV Index: ")
const humidity = $('').addClass('card-text current-humidity').text("It Feels Like: " + response.main.humidity + '%');
const wind = $('').addClass('card-text current-wind').text("Feel the Breeze: " + response.wind.speed + " MPH");

const apiKey ='6e0a6f003c0ba257f116574ef04963ac';
const queryURL = 'api.openweathermap.org/data/2.5/forecast?q=' + city + apiKey;
//api call somwehre 
//fetchcall? 
//URL: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={apiKey}
//var d = new Date();

document.getElementById("").innerHTML = d;


function todaysForecast();



function clearResults(){
  event.preventDefault();
  city=[];
  localStorage.removeItem('city');
  document.location.reload();

}
init();
