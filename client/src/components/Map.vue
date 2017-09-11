<template>
  <div class="mapView" id="map">
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: '',
    };
  },
  methods: {
    initMap: () => {  
      this.map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
          }),
        ],
        target: 'map',
        view: new ol.View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    
      /*
      var ol3d = new olcs.OLCesium({ map: map }); // map is the ol.Map instance
      var scene = ol3d.getCesiumScene();
      scene.terrainProvider = new Cesium.CesiumTerrainProvider({
        url: 'https://assets.agi.com/stk-terrain/world',
      });
      ol3d.setEnabled(false);
      */
    },
  },
  mounted() {
    this.$nextTick(() => {
      // Should change this to be called in main app instead since it's called twice
      this.initMap();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map {
    border-radius: 10px;
    overflow: hidden;
    height:100%;
}

#map div canvas{
    border-radius: 10px;
}
</style>
