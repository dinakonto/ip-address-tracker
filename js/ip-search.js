// TODO
// Handle errors in UI (eg no results/invalid search)
// Pass API key securely


let endpoint = "https://geo.ipify.org/api/v1";
let apiKey = "at_CbhW0S7JWO63G0Wm52yIgwAaO1hL9";
let myMap;

function search() {
  let query = $("#input").val();
  ipLookup(query);
}

function ipLookup(query) {
  let searchEndpoint = endpoint + "?apiKey=" + apiKey;
  if (query) {
    if($.isNumeric(query)) {
      searchEndpoint += "&ipAddress=" + query
    } else {
      searchEndpoint += "&domain=" + query
    }

  }
  $.ajax({
    url: searchEndpoint,
    dataType: "json",
    success: function(data) {
      console.log(data)
      popDisplay(data);
      popMap(data);
    }
  });
}

function popDisplay(results) {
  $("#ip").text(results.ip);
  $("#location").text(results.location.city + ", " + results.location.region + " " + results.location.postalCode);
  $("#timezone").text("UTC " + results.location.timezone);
  $("#isp").text(results.isp);
}

function popMap(results) {
  myMap.setView([results.location.lat, results.location.lng], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZGluYWtvbnRvIiwiYSI6ImNrYWx6cGE0MTE3c2gyenMwOWdqcDJ1ZTcifQ.X6sKiHSxq4uWUNvS03bNNg'
  }).addTo(myMap);

}

function init() {
  myMap = L.map('mapid');
  ipLookup();
}

init()
