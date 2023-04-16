var center = SMap.Coords.fromWGS84(15.8453672, 50.2065450);
var map = new SMap(JAK.gel("mapa"), center, 12);
map.addDefaultLayer(SMap.DEF_BASE).enable();
map.addDefaultControls();

var layer = new SMap.Layer.Marker();
map.addLayer(layer);
layer.enable();

var stadion = new SMap.Card();
stadion.getHeader().innerHTML = "<strong>Všesportovní areál v Hradci Králové</strong>";
stadion.getBody().innerHTML = "Malšovická, 50009 Hradec Králové, Česko";


var stadionPosition = SMap.Coords.fromWGS84(15.8453672, 50.2065450);

var optionsStadion = { 
    title: "Stadion"
};
var marker1 = new SMap.Marker(stadionPosition, "marker1", optionsStadion);
marker1.decorate(SMap.Marker.Feature.Card, stadion);
layer.addMarker(marker1);