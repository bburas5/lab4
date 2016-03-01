//set extent of map
var map = L.map('map').setView([ 30.4500,-91.145688], 12);
		var bm =L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
//wms layers added to the map from Rest Services	
var busroute = L.tileLayer.wms("https://maps.brgov.com/gis/services/Transportation/Bus_Route/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var parks = L.tileLayer.wms("https://maps.brgov.com/gis/services/Infrastructure/BREC_Park/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var busstop = L.tileLayer.wms("https://maps.brgov.com/gis/services/Transportation/Bus_Stop/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var hospital = L.tileLayer.wms("https://maps.brgov.com/gis/services/Infrastructure/Hospital/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var baseLayers = {
    "Basemap": bm
};
//control layers, uncheck or check box
var overlays = {
    "Bus Route": busroute,
    "Parks": parks,
	"Bus Stop": busstop,
	"Hospitals": hospital
};
L.control.layers(baseLayers, overlays).addTo(map);