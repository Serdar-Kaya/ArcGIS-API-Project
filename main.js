require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
], function (Map, SceneView, GeoJSONLayer) {
  const dataUrl = "./data/locations.json";

  const geojsonLayer = new GeoJSONLayer({
    title: "Most livable cities",
    url: dataUrl,
  });

  const map = new Map({
    basemap: "dark-gray",
    layers: [geojsonLayer],
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
