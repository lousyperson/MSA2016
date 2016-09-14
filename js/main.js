// var currentWeather: Weather;
var pageheader = $('#page-header')[0];
var pagecontainer = $('#page-container')[0];
var clicky = $("#clicky")[0];
clicky.addEventListener("click", function () {
    changeUI();
});
function changeUI() {
    pageheader.innerHTML = "Loading weather from openweathermap.org...";
    getWeather();
    // getWeather(function(weather) {
    //     pageheader.innerHTML = "Current weather is: " + weather;
    // });
}
// function changeUI() : void {
//     pageheader.innerHTML = "Current weather is: " + currentWeather.weather;
//     img.src = currentWeather.emoji;
//     img.style.display = "block";
//     refreshbtn.style.display = "inline";
//     pagecontainer.style.marginTop = "20px";
// }
function getWeather() {
    var city = document.getElementById("city").value;
    var img = $("#selected-img")[0];
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=14f7fe6958461d28b690d3cda8948696&units=metric',
        type: "POST",
        success: function (data) {
            if (data.cod == 404) {
                pageheader.innerHTML = data.message + " - " + city;
            }
            else {
                pageheader.innerHTML = "Current weather is: " + data.weather[0].main;
                img.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            }
        },
        error: function (data) {
            alert("error");
        }
    });
    // .done(function (data) {
    //     pageheader.innerHTML = data.base;
    // })
    // .fail(function (data) {
    //     pageheader.innerHTML = "error";
    // })
    // $.get('api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=14f7fe6958461d28b690d3cda8948696&units=metric', function (data) {
    //     alert('page content: ');
    // if (data.cod == "404") {
    //     alert(data.message + " - " + city);
    // } else {
    //     pageheader.innerHTML = "osmehitn";
    //     var weather = data.coord.lon;
    //     callback(weather);
    // }
    // });
    // .done(function (data) {
    //     if (data.length != 0) {
    //         var weather = data.weather[0].main;
    //         callback(weather);
    //     } else {
    //         pageheader.innerHTML = "Hmm, we can't detect a human face in that photo. Try another?";
    //     }
    // })
    // .fail(function (error) {
    //     pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
    //     console.log(error.getAllResponseHeaders());
    // });
}
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
