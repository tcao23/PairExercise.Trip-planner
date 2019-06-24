const { Marker } = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
};

module.exports = (type, coords) => {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '38px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

  console.log("Hello")
  return new Marker(markerDomEl).setLngLat(coords);
}
