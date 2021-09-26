require([
  "esri/WebScene",
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
], function (WebScene, Map, SceneView) {
  const webscene = new WebScene({
    basemap: null,
    ground: {
      surfaceColor: [226, 240, 255],
    },
  });

  const map = new Map({
    basemap: "topo",
  });
  const view = new SceneView({
    map: map,
    container: "viewDiv",
    environment: {
      background: {
        type: "color",
        color: [0, 255, 225, 0.5],
      },
      starsEnabled: false,
      atmosphereEnabled: false,
    },
  });

  view.ui.empty("top-left");
});
