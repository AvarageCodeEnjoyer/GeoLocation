
const x = document.getElementById("position");
let i = 1

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const { latitude: lat, longitude: long } = position.coords;
  const url = buildUrl(lat, long);
  fetch(url)
  .then(response => response.json())
  .then(({display_name, lat, lon, licence: license}) => {
    x.innerHTML = result(display_name, lat, lon)
    console.clear();
    console.log(
      ` For legal Reasons, \n ${license}`,  
      `\n \n Location API: https://nominatim.openstreetmap.org/ui/search.html?q=${lat}%2C+${lon}`,
      `\n \n JSON Format: https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`,
      `\n \n Latitude: ${lat}`,
      `\n Longitude: ${long}`,
      `\n \n Times Doxed: ${i}`
    );
    i++;
  });
}

function buildUrl(lat, long) {
  return `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
}

function result(display_name, lat, lon){
  return display_name + '<br> <br>' + '<b>Latitude: </b>' + lat + '<br>' + '<b>Longitude: </b>' + lon;
}