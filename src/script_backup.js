function formatDate(date) {
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
  
  let currentDate = new Date();
  let dateElement = document.querySelector("#current-date");
  dateElement.innerHTML = formatDate(currentDate);
  
  function getTemperature(response) {
    console.log(response.data);
    document.querySelector("#search-city-result").innerHTML = response.data.name;
    document.querySelector("#current-temperature").innerHTML =
      Math.round(response.data.main.temp) + "°";
    document.querySelector("#feels-like").innerHTML =
      "Feels like: " + Math.round(response.data.main.feels_like) + "°";
  }
  
  function searchCity(event) {
    event.preventDefault();
    let apiKey = "d77489ebd0ba8b6fa1d62c2519e08052";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let city = document.querySelector("#search-city-input").value;
    let units = "metric";
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(getTemperature);
  }
  
  let form = document.querySelector("#city-search-form");
  form.addEventListener("submit", searchCity);
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#current-temperature");
    temperatureElement.innerHTML = 15;
  }
  
  let fahrenheitTemp = document.querySelector("#fahrenheit-temp");
  fahrenheitTemp.addEventListener("click", convertToFahrenheit);
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#current-temperature");
    temperatureElement.innerHTML = -9;
  }
  
  let celsiusTemp = document.querySelector("#celsius-temp");
  celsiusTemp.addEventListener("click", convertToCelsius);



function hourlyForecast() {

}

let hourlyButton = document.querySelector("#hourly-button");
hourlyButton.addEventListener("click", hourlyForecast);





















