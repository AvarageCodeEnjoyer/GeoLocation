
const x = document.getElementById("position");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude
  var long = position.coords.longitude
  fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long)
  .then(response => response.json())
  .then(data => {
    x.innerHTML = data.display_name
    console.clear()
    console.log("Location API")
    console.log('https://nominatim.openstreetmap.org/ui/search.html?q=' + lat + '%2C+' + long)
    console.log("JSON Format")
    console.log('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long)
    console.log("Latitude: " + lat)
    console.log("longitude: " + long)
  })
}