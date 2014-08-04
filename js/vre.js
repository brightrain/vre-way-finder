(function vre() {
	var map;
	$(document).ready(function(){
        map = L.mapbox.map('map', 'brightrain.j0jhfgf8');
        /*CORS issue
        L.mapbox.featureLayer()
                .loadURL('http://dev.brightrain.com/vre/data/stations.json')
                .addTo(map);
        */
    });
}())