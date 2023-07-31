const city = document.getElementById("city");
const temperature = document.querySelector(".temperature-number");
const condition = document.querySelector("#condition");
const icon = document.querySelector("#icon");

// wind rain humidity getter

const wind = document.getElementById("wind");
const rain = document.getElementById("rain");
const humidity = document.getElementById("humidity")

async function getWeather() {
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Rionegro%20Antioquia';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f4021e0e0cmshbac9fadd1ab9491p114465jsn310059b3e7d2',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    const location = result.location.name;
    city.innerText = result.location.name;
    temperature.innerText = result.current.temp_c + "°";
    condition.innerText = result.current.condition.text;
    icon.src = result.current.condition.icon;
    
    // change

    wind.innerText = result.current.wind_kph + " km/h";
    humidity.innerText = result.current.humidity + " %";
    rain.innerText = result.current.precip_mm + " mm";
  } catch (error) {
    console.error(error);
  }
}

getWeather();