// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 28.639321, lng: -106.073284 },
    });
    setMarkers(map);
  }
  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
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
  function clearMarkers() {
    setMarkers(null);
  }
  function setMarkers(map) {
    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    const image = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32),
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
    };
    const timer = ms => new Promise(res => setTimeout(res, ms))

  async function load () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      new google.maps.Marker({
        position: { lat: beach[1], lng: beach[2] },
        map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
      });
      // setMapOnAll(null);
      console.log(beach)
      // beach.setMap(null);
      await timer(1000); // then the created Promise can be awaited
    }
  }
  async function clean () { // We need to wrap the loop into an async function for this to work
    for (let i = 0; i < beaches.length; i++) {


      // setMarkers(null);
      // beaches = [];


  // Funciona pero se ve como se actualiza el mapa
      const myLatLng = {lat: 28.622298, lng: -106.023827};
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 13,
  });


      await timer(1100); // then the created Promise can be awaited
    }
  }
  load();
  clean();
  // clean();
  }

data = [[1, 28, -106,],[2, 29, -107]]

  for (var i in data)
  {
      var row = data[i];             
      var latt = row[1];           
      var lon = row[2]; 
      timeout=i*1000;
      moveMarker(map, marker, latt, lon, timeout);
  }




function moveMarker( map, marker, latt, lon, timeout) {

setTimeout( function(){ marker.setPosition( new google.maps.LatLng( latt ,       lon  ) ); }, timeout );
console.log(moveMarker())
};