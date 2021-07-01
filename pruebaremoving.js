// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
let map;
let markers = [];
const beaches = [
    ["Circcunvalacion 1", 28.610234, -106.005788, 4],
    ["Circunvalacion 2", 28.611024, -106.006846, 5],
    ["Marmol", 28.611741, -106.008044, 3],
    ["Circuito universitario", 28.612418, -106.009160, 2],
    ["Dale", 28.613096, -106.010323, 1],
    ["Circcunvalacion 1", 28.613587, -106.011144, 4],
    ["Circunvalacion 2", 28.614185, -106.012172, 5],
    ["Marmol", 28.614869, -106.013194, 3],
    ["Circuito universitario", 28.615359, -106.013945, 2],
    ["Dale", 28.615773, -106.014589, 1],
    ["Circcunvalacion 1", 28.616414, -106.015512, 4],
    ["Circunvalacion 2", 28.616894, -106.016241, 5],
    ["Marmol", 28.617337, -106.016960, 3],
    ["Circuito universitario", 28.617977, -106.017593, 2],
    ["Dale", 28.618495, -106.018441, 1],
  ];

function initMap() {
  const haightAshbury = { lat: 28.639321, lng: -106.073284 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: haightAshbury,
  });
  setMapOnAll();
  // This event listener will call addMarker() when the map is clicked.
  map.addListener("click", (event) => {
    addMarker();
  });
//   // Adds a marker at the center of the map.
//   addMarker(haightAshbury);
}

// Adds a marker to the map and push to the array.
function addMarker() {
//   const marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });
//   markers.push(marker);
for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        console.log(markers)
    }
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function load () { // We need to wrap the loop into an async function for this to work
        for (let i = 0; i < beaches.length; i++) {
          const beach = beaches[i];
          new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map,
            title: beach[0],
            zIndex: beach[3],
          });
          // setMapOnAll(null);
          console.log(beach)
          markers.push(beach)
          console.log(markers)
          // beach.setMap(null);
          await timer(1000); // then the created Promise can be awaited
        }
      }
    async function loadd () { // We need to wrap the loop into an async function for this to work
        for (let i = 0; i < beaches.length; i++) {
          const beach = beaches[i];
          delete google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map,
            title: beach[0],
            zIndex: beach[3],
          });
          // setMapOnAll(null);
          console.log(beach)
          // beach.setMap(null);
          await timer(1100); // then the created Promise can be awaited
        }
      }
      load();
      loadd();
//   for (let i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//     console.log(markers)
//   }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function loaded () { // We need to wrap the loop into an async function for this to work
        for (let i = 0; i < beaches.length; i++) {
            clearMarkers();
            beaches = [];
          console.log(beaches)
          // beach.setMap(null);
          await timer(1100); // then the created Promise can be awaited
        }
      }
      loaded();
}