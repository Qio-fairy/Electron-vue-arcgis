<template>
  <div class="claro">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      esriLoader
        .loadModules([
          'esri/views/2d/draw/Draw',
          'esri/Map',
          'esri/views/MapView',
          'esri/layers/TileLayer',
          'esri/layers/MapImageLayer',
          'esri/layers/FeatureLayer',
          'esri/Graphic',
          'esri/geometry/Point',
          'esri/geometry/Polyline',
          'esri/geometry/Polygon',
          'esri/geometry/geometryEngine',
          'esri/widgets/Locate',
          'esri/widgets/Expand',
          'esri/widgets/Fullscreen',
          'esri/tasks/PrintTask',
          'esri/tasks/support/PrintTemplate',
          'esri/tasks/support/PrintParameters',
          'dojo/dom',
          'dojo/dom-construct',
          'dojo/on',
          'dojo/_base/xhr',
          'dojo/domReady!'
        ])
        .then(
          ([
            Draw,
            Map,
            MapView,
            TileLayer,
            MapImageLayer,
            FeatureLayer,
            Graphic,
            Point,
            Polyline,
            Polygon,
            geometryEngine,
            Locate,
            Expand,
            Fullscreen,
            PrintTask,
            PrintTemplate,
            PrintParameters,
            dom,
            domConstruct,
            on,
            xhr
          ]) => {
            // 图层设定
            var map = new Map({
              basemap: 'streets'
            })
            var mapView = new MapView({
              map: map,
              container: 'viewDiv'
            })
            var locateBtn = new Locate({
              view: mapView
            })
            var fullscreen = new Fullscreen({
              view: mapView
            })

            mapView.ui.add(fullscreen, 'top-left')
            mapView.ui.add(locateBtn, {
              position: 'top-left'
            })
          }
        )
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import url("http://192.168.115.241:9999/arcgis_js_v46_api/arcgis_js_api/library/4.6/esri/css/main.css");
@import url("http://192.168.115.241:9999/arcgis_js_v46_api/arcgis_js_api/library/4.6/dijit/themes/claro/claro.css");
.claro {
  width: 100%;
  height: 800px;
}
#viewDiv {
  width: 100%;
  height: 100%;
}
</style>
