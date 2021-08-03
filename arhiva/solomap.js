/*
================================================================================
LOCATION MAP
================================================================================
*/
function soloMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9nc2VsbGVyIiwiYSI6ImNrN2VpbXlpbjAwNDIzbnM1N2ZhMW9laGkifQ.DUf-8r1jXF4o7ApMUcKVXQ';
  
    var bounds = [
      [13.109302076751561, 42.167215037402855],
      [19.821668059258826, 46.816119904050964]
    ];
  
    var map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/fogseller/cknip0h0j0oqm17mgvd8wwi8y?optimize=true', // style URL / dodano optimize=true
      center: [16.013, 45.812], // starting position [lng, lat]
      zoom: 17.42, // starting zoom
      minZoom: 6.64, // note the camel-case
      maxZoom: 19,
      maxBounds: bounds,
  /*     bearing: 27,
      pitch: 45 */
    });
  
  
  /* DODANO ALI NE RADI*/
   map.addControl(new mapboxgl.NavigationControl()); 
  
  
  
  
  
  map.doubleClickZoom.enable();
  console.log("MAP DOUBLECLICK!"); 
  
  
  
  /*
  ================================================================================
  MAP RESIZE
  ================================================================================
  */
  
   map.once('load', () => {
  map.resize();
  });
  console.log("MAP RESIZE!"); 
  