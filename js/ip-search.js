// TODO
// Handle errors in UI (eg no results/invalid search)
// Pass API key securely

/*
 * GLOBAL VARIABLES
 */

// Get IPify API credentials
const endpoint = "https://geo.ipify.org/api/v1";
const apiKey = "at_CbhW0S7JWO63G0Wm52yIgwAaO1hL9";
// Leaflet.js map variables
const myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [46, 55],
    iconAnchor: [23, 55],
});
let myMap;


/*
 * FUNCTIONS
 */

// PERFORM AN IP LOOKUP
function ipLookup(query) {
  // Create the endpoint url
  let searchEndpoint = endpoint + "?apiKey=" + apiKey;
  // If user has entered something into the search box...
  if (query) {
    // ...and it's a number, search for an IP address
    if($.isNumeric(query)) {
      searchEndpoint += "&ipAddress=" + query
    }
    // ...otherwise, search for a domain
    else {
      searchEndpoint += "&domain=" + query
    }

  }
  // Make the API call
  $.ajax({
    url: searchEndpoint,
    dataType: "json",
    success: function(data) {
      popDisplay(data);
      popMap(data);
    }
  });
}

// SEARCH FOR SOMETHING
function search() {
  let query = $("#input").val();
  ipLookup(query);
}

// POPULATE THE RESULTS DISPLAY
function popDisplay(results) {
  $("#ip").text(results.ip);
  $("#location").text(results.location.city + ", " + results.location.region + " " + results.location.postalCode);
  $("#timezone").text("UTC " + results.location.timezone);
  $("#isp").text(results.isp);
}

// POPULATE THE MAP
function popMap(results) {
  // Use the lat/long from the API response, set zoom
  myMap.setView([results.location.lat, results.location.lng], 13);
  // Add the visual layer from mapbox
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZGluYWtvbnRvIiwiYSI6ImNrYWx6cGE0MTE3c2gyenMwOWdqcDJ1ZTcifQ.X6sKiHSxq4uWUNvS03bNNg'
  }).addTo(myMap);
  // Add the custom position marker
  L.marker([results.location.lat, results.location.lng], {icon: myIcon}).addTo(myMap)
}

// SET-UP STUFF ON INITIAL PAGE LOAD
function init() {
  // Create the map
  myMap = L.map('mapid');
  // Perform the initial default search (no query)
  ipLookup();
}



init()
