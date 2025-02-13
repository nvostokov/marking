let scaleMap, windowWidth = window.innerWidth, scaleRoad;
windowWidth > 2600 ? (scaleMap = 7,
scaleRoad = 4) : windowWidth < 2e3 ? (scaleMap = 6,
scaleRoad = 3) : (scaleMap = 7,
scaleRoad = 3.8),
console.log(scaleRoad, scaleMap, windowWidth, window.innerHeight);


var map = L.map('map').setView([62.8393, 40.5168], scaleMap); // Архангельская область

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var layer1 = L.geoJson(geojsonLayer1, {
  style: { color: 'red', weight: 3.5 },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
});

var layer2 = L.geoJson(geojsonLayer2, {
  style: { color: 'green', weight: 3.5 },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
});

var layer3 = L.geoJson(geojsonLayer3, {
  style: { color: 'black', weight: 3.5 },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
});

var layer4 = L.geoJson(geojsonLayer4, {
  style: { color: 'blue', weight: 3.5 },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
});

var layer5 = L.geoJson(geojsonLayer5, {
  style: { color: 'purple', weight: 3.5 },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
});


layer1.addTo(map);
layer2.addTo(map);
layer3.addTo(map);
layer4.addTo(map);
layer5.addTo(map);

document.getElementById('layer1').addEventListener('change', function() {
  if (this.checked) {
    layer1.addTo(map);
  } else {
    map.removeLayer(layer1);
  }
});

document.getElementById('layer2').addEventListener('change', function() {
  if (this.checked) {
    layer2.addTo(map);
  } else {
    map.removeLayer(layer2);
  }
});

document.getElementById('layer3').addEventListener('change', function() {
  if (this.checked) {
    layer3.addTo(map);
  } else {
    map.removeLayer(layer3);
  }
});

document.getElementById('layer4').addEventListener('change', function() {
  if (this.checked) {
    layer4.addTo(map);
  } else {
    map.removeLayer(layer4);
  }
});
document.getElementById('layer5').addEventListener('change', function() {
  if (this.checked) {
    layer5.addTo(map);
  } else {
    map.removeLayer(layer5);
  }
});

var searchControl = new L.Control.Search({
  layer: L.layerGroup([layer1, layer2, layer3, layer4, layer5]),

  propertyName: 'name',
  marker: false,
  moveToLocation: function(latlng, title, map) {
    map.fitBounds(latlng.layer.getBounds());
    latlng.layer.openPopup();
  }
});

searchControl.on('search:locationfound', function(e) {
    
    //console.log('search:locationfound', );

    //map.removeLayer(this._markerSearch)

    e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
    if(e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function(e) {

    layer.eachLayer(function(layer) {	//restore feature color
        layer.resetStyle(layer);
    });	
});

map.addControl(searchControl);


/* var searchControl = new L.Control.Search({
  layer: L.layerGroup([layer1, layer2, layer3, layer4, layer5]),

  propertyName: 'name',
  marker: false,
  moveToLocation: function(latlng, title, map) {
    map.fitBounds(latlng.layer.getBounds());
    latlng.layer.openPopup();
  }
});

searchControl.on('search:locationfound', function(e) {
    
    //console.log('search:locationfound', );

    //map.removeLayer(this._markerSearch)

    e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
    if(e.layer._popup)
        e.layer.openPopup();

}).on('search:collapsed', function(e) {

    layer1.eachLayer(function(layer) {	//restore feature color
        layer1.resetStyle(layer);
    });	
});

map.addControl(searchControl); */


//
