function getWeather() {
  const city = document.getElementById('city').value.trim();
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const apiKey = '5584978616ed47628d283952250707'; // Replace with your WeatherAPI key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found or API error');
      }
      return response.json();
    })
    .then(data => {
      // Show weather data
      document.getElementById('weatherResult').classList.remove('d-none');

      document.getElementById('cityName').innerText = `${data.location.name}, ${data.location.country}`;
      document.getElementById('temp').innerText = data.current.temp_c;
      document.getElementById('condition').innerText = data.current.condition.text;
      document.getElementById('humidity').innerText = data.current.humidity;
      document.getElementById('wind').innerText = data.current.wind_kph;
      document.getElementById('icon').src = `https:${data.current.condition.icon}`;
    })
    .catch(error => {
      alert(error.message);
      document.getElementById('weatherResult').classList.add('d-none');
      console.error(error);
    });
}
