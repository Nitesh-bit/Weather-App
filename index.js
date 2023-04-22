const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16a7d13c76msh3f0304cf67c4ffep1cdc44jsn238db42c4e66",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

text.innerHTML = "Please Enter your city";
const getWeather = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Please enter correct city name");
        throw new Error(response);
      }
    })
    .then((response) => {
      setTimeout(() => {
        text.innerHTML = "Weather for ";
        cityName.innerHTML = city;
      }, 100);
      (cloud_pct.innerHTML = response.cloud_pct),
        (feels_like.innerHTML = response.feels_like),
        (humidity.innerHTML = response.humidity),
        (max_temp.innerHTML = response.max_temp),
        (min_temp.innerHTML = response.min_temp),
        (sunrise.innerHTML = response.sunrise),
        (sunset.innerHTML = response.sunset),
        (temp.innerHTML = response.temp),
        (wind_speed.innerHTML = response.wind_speed);
      // (wind_degrees.innerHTML = response.wind_degrees),
    })
    .catch((err) => {
      console.log("Undefined city name ");
      console.log(err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    (temp2.innerHTML = response.temp),
      (humidity2.innerHTML = response.humidity),
      (wind_speed2.innerHTML = response.wind_speed);
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney",
  options
)
  .then((response) => response.json())
  .then((response) => {
    (temp3.innerHTML = response.temp),
      (humidity3.innerHTML = response.humidity),
      (wind_speed3.innerHTML = response.wind_speed);
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York",
  options
)
  .then((response) => response.json())
  .then((response) => {
    (temp4.innerHTML = response.temp),
      (humidity4.innerHTML = response.humidity),
      (wind_speed4.innerHTML = response.wind_speed);
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
  options
)
  .then((response) => response.json())
  .then((response) => {
    (temp5.innerHTML = response.temp),
      (humidity5.innerHTML = response.humidity),
      (wind_speed5.innerHTML = response.wind_speed);
  })
  .catch((err) => console.error(err));
