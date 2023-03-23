// function showCityLocation(position) {
//   console.log(position);

//   let currentLatitude = position.coords.latitude;
//   let currentLongitude = position.coords.longitude;

//   let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
//   let units = "metric";
//   let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
//   let apiUrl = `${apiEndPoint}?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=${units}`;

//   axios.get(apiUrl).then(showCurrentTemp);
// }

// function cityLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(showCityLocation);
// }

// let button = document.querySelector("#form");
// button.addEventListener("click", cityLocation);

// function showCurrentTemp(response) {
//   console.log(response);
//   let temperature = Math.round(response.data.main.temp);
//   let humidity = response.data.main.humidity;

//   let country = response.data.sys.country;
//   let city = response.data.name;

//   let span = document.querySelector("#temperature");
//   span.innerHTML = temperature;
//   let humid = document.querySelector("#humid");
//   humid.textContent = humidity;
//   let showCountry = document.querySelector("h4");
//   showCountry.innerHTML = country;
//   let showCity = document.querySelector("#cityDisplay");
//   showCity.innerHTML = city;
// }

// function showLocation(position) {
//   console.log(position);

//   let formInput = document.querySelector("#text-form");
//   let inputCity = `${formInput.value}`;

//   let cityLatitude = position.coords.latitude;
//   cityLatitude = inputCity.currentLatitude;
//   let cityLongitude = position.coords.longitude;
//   cityLongitude = inputCity.currentLongitude;

//   let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
//   let units = "metric";
//   let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
//   let apiUrl = `${apiEndPoint}?q=${inputCity}&lat=${cityLatitude}&lon=${cityLongitude}&appid=${apiKey}&units=${units}`;

//   axios.get(apiUrl).then(showCurrentTemp);
// }

// function showLocationInfo(event) {
//   event.preventDefault();
//   let data = document.querySelector("#text-form");

//   navigator.geolocation.getCurrentPosition(showLocation);
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", showLocationInfo);

function showWeather(response) {
  console.log(response);
}

function checkWeather(event) {
  event.preventDefault();

  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let city = document.querySelector("text-form").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}
