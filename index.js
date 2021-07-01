let map;
let marker;
let watchID;
let geoLoc;

function initMap() {
    const myLatLng = {lat: 19.42847, lng: -99.12766};
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 13,
  });
  const svgMarker = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  };
  marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hola mundo",
      icon: svgMarker,
  });
  getPosition();
  marker.setPosition(myLatLng);
}

function getPosition(){
    if(navigator.geolocation){
        var options = {timeout:1000};
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options);
    } else{
        alert("Lo sentimos el explorador no soporta geolocalizacion")
    }
}

function showLocationOnMap(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    console.log("Latitud:"+ latitud + "Longitud"+ longitud);

    const myLatLng = {lat: latitud, lng: longitud};
    marker.setPosition(myLatLng);
    map.setCenter(myLatLng);
}

function errorHandler(err){
    if(err.code == 1){
        alert("Error: Acceso denegado!");
    } else if(err.code == 2){
        alert("Position no existe o no se encuentra");
    }
}

// const getLocations = () => {
//     fetch('data.json')
//     .then(response => response.json())
//     .then(locations => {
//         let locationsInfo = []
//         console.log(locationsInfo)
//         locations.forEach(location => {
//             let locationData = {
//                 position:{lat:location.punto.coordinates[1],lng:location.punto.coordinates[0]},
//                 name:location.nombre_sede                
//             }
//             locationsInfo.push(locationData)
//         })
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition((data)=>{
//                 let currentPosition = {
//                     lat: data.coords.latitude,
//                     lng: data.coords.longitude
//                 }
//                 dibujarMapa(currentPosition, locationsInfo)
//             })
//         }
//     })
// }

// const dibujarMapa = (obj, locationsInfo) => {
//    let map = new google.maps.Map(document.getElementById('map'),{
//         zoom: 4,
//         center: obj
//     })

//     let marker = new google.maps.Marker({
//         position: obj,
//         title: 'Tu ubicacion'
//     })
//     marker.setMap(map)

//     let markers = locationsInfo.map(place => {
//         return new google.maps.Marker({
//             position: place.position,
//             map: map,
//             title: place.name
//         })
//     })
// }
// window.addEventListener('load',getLocations)

// const getLocations = () => {
//     fetch('datos.json')
//     .then(response => response.json())
//     .then(locations => {
//         let locationsInfo = []
//         console.log(locationsInfo)
//         locations.forEach(location => {
//             let locationData = {
//                 position:{lat:location.punto.coordinates[1],lng:location.punto.coordinates[0]},
//                 name:location.nombre_sede                
//             }
//             locationsInfo.push(locationData)
//             })
//             dibujarMapa(locationsInfo)
//     })
// }

// const dibujarMapa = (locationsInfo) => {
//     const myLatLng = {lat: 28.6353, lng: -106.089};
//    let map = new google.maps.Map(document.getElementById('map'),{
//         zoom: 4,
//         center: myLatLng
//     })

//     let markers = locationsInfo.map(place => {
//         return new google.maps.Marker({
//             position: place.position,
//             map: map,
//             title: place.name
//         })
//     })
// }

// window.addEventListener('load',getLocations)

// function setMarkers(map) {
//     // Adds markers to the map.
//     // Marker sizes are expressed as a Size of X,Y where the origin of the image
//     // (0,0) is located in the top left of the image.
//     // Origins, anchor positions and coordinates of the marker increase in the X
//     // direction to the right and in the Y direction down.
//     const image = {
//       url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//       // This marker is 20 pixels wide by 32 pixels high.
//       size: new google.maps.Size(20, 32),
//       // The origin for this image is (0, 0).
//       origin: new google.maps.Point(0, 0),
//       // The anchor for this image is the base of the flagpole at (0, 32).
//       anchor: new google.maps.Point(0, 32),
//     };
//     // Shapes define the clickable region of the icon. The type defines an HTML
//     // <area> element 'poly' which traces out a polygon as a series of X,Y points.
//     // The final coordinate closes the poly by connecting to the first coordinate.
//     const shape = {
//       coords: [1, 1, 1, 20, 18, 20, 18, 1],
//       type: "poly",
//     };
  
//     for (i = 0; i < markers1.length; i++) {
//         var category;
//         var pos = new google.maps.LatLng(markers1[i][2], markers1[i][3]);
//         var content = markers1[i][1];
//         bounds.extend(pos);
//         marker1 = new google.maps.Marker({
//             position: pos,
//             map: map,
//             icon: image1
//         });
    
//         gmarkers1.push(marker1);
//         // [START]-Event listener to center view and go to position
//         google.maps.event.addListener(marker1, 'click', (function(marker1, content) {
//             return function() {
//               console.log('Gmarker 1 gets pushed')
//                 infowindow.setContent(content);
//                 infowindow.open(map, marker1);
//                 map.panTo(this.getPosition());
//                 map.setZoom(15);
//             }
//         })(marker1, content));
//     }
//   }

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 1,
//       center: { lat: -33.9, lng: 151.2 },
//     });
//     setMarkers(map);
//   }
//   // Data for the markers consisting of a name, a LatLng and a zIndex for the
//   // order in which these markers should display on top of each other.
// //   const beaches = [
// //     ["Bondi Beach", -33.890542, 151.274856, 4],
// //     ["Coogee Beach", -33.923036, 151.259052, 5],
// //     ["Cronulla Beach", -34.028249, 151.157507, 3],
// //     ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
// //     ["Maroubra Beach", -33.950198, 151.259302, 1],
// //   ];
  
//   function setMarkers(map) {
//     // Adds markers to the map.
//     // Marker sizes are expressed as a Size of X,Y where the origin of the image
//     // (0,0) is located in the top left of the image.
//     // Origins, anchor positions and coordinates of the marker increase in the X
//     // direction to the right and in the Y direction down.
//     const image = {
//       url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//       // This marker is 20 pixels wide by 32 pixels high.
//       size: new google.maps.Size(20, 32),
//       // The origin for this image is (0, 0).
//       origin: new google.maps.Point(0, 0),
//       // The anchor for this image is the base of the flagpole at (0, 32).
//       anchor: new google.maps.Point(0, 32),
//     };
//     for (let i = 0; i < locationsInfo.length; i++) {
//         const locationsInfo = locationsInfo[i];
//         new google.maps.Marker({
//           position: { lat: locationsInfo[1], lng: locationsInfo[2] },
//           map,
//           icon: image,
//           shape: shape,
//           title: locationsInfo[0]
//         });
//       }
//     }