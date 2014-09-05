(function vre() {
	var map;
	$(document).ready(function(){
        $(".station-info-pane").hide();
        map = L.mapbox.map('map', 'brightrain.j0jhfgf8');
        map.on("click", function(e) {
            $(".station-info-pane").hide();
            $("#alexandria-station-info").show();
        });
        /*CORS issue
        L.mapbox.featureLayer()
                .loadURL('http://dev.brightrain.com/vre/data/stations.json')
                .addTo(map);
        */
    });
}())