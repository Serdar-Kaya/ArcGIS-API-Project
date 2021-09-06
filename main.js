require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
], function (Map, SceneView, Map_1, SceneView_1) {
  const map = new Map({
    basemap: "topo",
  });
  const view = new SceneView({
    map: map,
    container: "viewDiv",
  });

  ("use strict");
  Object.defineProperty(exports, "__esModule", { value: true });
  var Map_1 = require("esri/Map");
  var SceneView_1 = require("esri/views/SceneView");
  var map = new Map_1.default({
    basemap: "topo",
  });
  var view = new SceneView_1.default({
    map: map,
    container: "viewDiv",
  });

  view.ui.empty("top-left");
});
