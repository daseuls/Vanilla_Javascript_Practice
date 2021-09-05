navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

const API_KEYS = "af3cc8709eebf290ec8dd8a90bdb9d45"

function onGeoOk(position) {
  console.log(position)
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const location = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")
      location.innerHTML = data.name
      weather.innerHTML = data.weather[0].main
    })
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다!")
}
