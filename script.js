function citySearch() {
    var searchInput = document.getElementById(('exampleDataList'))
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid=80ddee6db97c621a8da29f571dea232f')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    weatherStats(myJson);
  });
}

function weatherStats(response) {
    console.log(response)

    var cityData = document.getElementById(('city'))
    var tempData = document.getElementById(('temp'))
    var windData = document.getElementById(('wind'))
    var humData = document.getElementById(('humidity'))
    var uvData = document.getElementById(('uv'))

    var todayDate = new Date()
    var month = todayDate.getMonth() + 1
    var day = todayDate.getDate();
    var year = todayDate.getFullYear();

    cityData.innerText = response.name + " " + month + "/" + day + "/" + year
    tempData.innerHTML = "Temperature: " + Math.floor(((response.main.temp-273.15)*1.8)+32) + "&#8457;"
    windData.innerText = "Wind Speed: " + response.wind.speed
    humData.innerText = "Humidity: " + response.main.humidity
    // uvData.innerText = "UV: " + response.
}

