const API_KEY = "43e3167c03459186e1c31e931fbafde6";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `Weather Info: ${data.weather[0].main} / Temp : ${data.main.temp}℃`;
    });
}
function onGeoError() {
    alert("Can't find your Location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);