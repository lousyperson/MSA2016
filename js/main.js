// var currentWeather: Weather;
var pageheader = $('#page-header')[0];
var pagecontainer = $('#page-container')[0];
var clicky = $("#clicky")[0];
clicky.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we analyse get the weather from openweathermap.org :)";
    // getweather(currentWeather);
});
function changeUI() {
    pageheader.innerHTML = document.getElementById("city").nodeValue;
}
// function changeUI() : void {
//     pageheader.innerHTML = "Current weather is: " + currentWeather.weather;
//     img.src = currentWeather.emoji;
//     img.style.display = "block";
//     refreshbtn.style.display = "inline";
//     pagecontainer.style.marginTop = "20px";
// }
// function sendWeatherRequest(callback) : void {
//     $.ajax({
//         url: "api.openweathermap.org/data/2.5/weather?q=${cur.city},${cur.country}&APPID=14f7fe6958461d28b690d3cda8948696&units=metric",
//         type: "POST",
//         data: null
//     })
//         .done(function (data) {
//             if (data.length != 0) {
//                 var weather = data[0].weather;
//                 callback(weather);
//             } else {
//                 pageheader.innerHTML = "Hmm, we can't detect a human face in that photo. Try another?";
//             }
//         })
//         .fail(function (error) {
//             pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
//             console.log(error.getAllResponseHeaders());
//         });
// }
// class Weather {
//     weather: string;
//     city: string;
//     country: string;
//     constructor(city: string, country: string) {
//         this.city = city;
//         this.country = country;
//     }
// }
// var clearDay : Weather = new Weather("clear sky", "http://openweathermap.org/img/w/01d.png");
// not yet done with all the var
// function getCurrWeather(weather : any) : Weather {
//     currentWeather = 
// }
// not yet done as well
// function init() : void {
// } 
