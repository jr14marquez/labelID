$(document).ready(function(){
	view = new ol.View({
		center: [-6217890.205764902, -1910870.6048274133],
		zoom:4,
		maxZoom:18,
		minZoom:2
	});	
	
	var mapquest = new ol.layer.Tile({
		source: new ol.source.OSM(),
		visible: true,
		name:'mapquest'
	});
	
	var bingmaps = new ol.layer.Tile({
		source: new ol.source.BingMaps({
			key: 'OIUHYwZKcxUAQQjkLXB7~bnK52y8zPuJDH_hXxvcIcw~Ak9i49yh2nOKWmBEseIp4fjhp9G_zrdhTPNF6e9gtx0DCkRCUO95QzCPbb4BRxke',
			imagerySet: 'AerialWithLabels'
		}),
		visible: false,
		name: 'bingmaps'
	});
	
	var esri = new ol.layer.Tile({
		source: new ol.source.OSM(),
		visible: false,
		name: 'esri'
	});
	
	

	var map = new ol.Map({
		target:'map',
		controls: ol.control.defaults().extend([
			new ol.control.ScaleLine(),
			new ol.control.ZoomSlider()
		]),
		renderer:'canvas',
		layers: [mapquest, bingmaps,esri],
		view: view
	});

	var ol3d = new olcs.OLCesium({map: map}); // map is the ol.Map instance
	var scene = ol3d.getCesiumScene();
	scene.terrainProvider = new Cesium.CesiumTerrainProvider({
  		url: 'https://assets.agi.com/stk-terrain/world'
  	});
  	ol3d.setEnabled(false);
});
