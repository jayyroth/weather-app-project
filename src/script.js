//DATE FORMAT
function formatDate(date) {
  let currentDate = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[currentDate.getDay()];
  
    let hours = currentDate.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
  }
 
  //API INTEGRATION
  function getDefaultTemperature(response) {
    console.log(response.data);
    let defaultTemperature = document.querySelector("#current-temperature");
    let defaultCity = document.querySelector("#search-city-result");
    let defaultFeelsLike = document.querySelector("#feels-like");
    let defaultTempMax = document.querySelector("#max-temp");
    let defaultTempMin = document.querySelector("#min-temp");
    let defaultDescription = document.querySelector("#weather-description");
    let defaultWeatherIcon = document.querySelector("#weather-icon");
    let defaultDateTime = document.querySelector("#current-date");
    let defaultWindSpeed = document.querySelector("#wind-speed");
    let defaultPressure = document.querySelector("#pressure");
    let defaultHumidity = document.querySelector("#humidity");

    celsiusTemp = response.data.main.temp;

    defaultTemperature.innerHTML = Math.round(response.data.main.temp) + "°";
    defaultCity.innerHTML = response.data.name;
    defaultFeelsLike.innerHTML =
      "Feels like: " + Math.round(response.data.main.feels_like) + "°";
    defaultTempMax.innerHTML =
      "H: " + Math.round(response.data.main.temp_max) + "°";
    defaultTempMin.innerHTML =
      "L: " + Math.round(response.data.main.temp_min) + "°";
    defaultDescription.innerHTML = response.data.weather[0].description;
    defaultWeatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    defaultDateTime.innerHTML = formatDate(response.data.dt * 1000);
    defaultWindSpeed.innerHTML = Math.round(response.data.wind.speed) + " mph";
    defaultPressure.innerHTML = response.data.main.pressure + " hPa";
    defaultHumidity.innerHTML = response.data.main.humidity + "%";
  }

  //SEARCH FORM
  function search(city) {
    let apiKey = "d77489ebd0ba8b6fa1d62c2519e08052";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getDefaultTemperature);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let citySearchResult = document.querySelector("#search-city-input");
    search(citySearchResult.value);
  }

  let form = document.querySelector("#city-search-form");
  form.addEventListener("submit", handleSubmit);

//CONVERSIONS
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(fahrenheitTemp) + "°";
}

let celsiusTemp = null;

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

function displayCelsiusTemp(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(celsiusTemp) + "°";
}

search("Kansas City");