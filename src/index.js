const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoidGNhbyIsImEiOiJjanhhazg5dHMwd2p4M25yemplNHBiaHlsIn0.u19f__M0vOr-CtTwbuuiyg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // Fullstack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available
});

buildMarker('hotels', [-74.009, 40.705]).addTo(map);

buildMarker('restaurants', [-74.010, 40.706]).addTo(map)

