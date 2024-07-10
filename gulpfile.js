const path = require("path");
const { src, watch, dest, parallel } = require("gulp");

const libs_dir = __dirname + "/ckanext/geoview/public/js/vendor"

const leaflet = () =>
  src(__dirname + "/node_modules/leaflet/dist/**/*").pipe(
    dest(libs_dir + "/leaflet/dist/" )
  );

const leaflet_providers = () =>
  src(__dirname + "/node_modules/leaflet-providers/leaflet-providers.js").pipe(
    dest(libs_dir + "/leaflet-providers/" )
  );


const proj4leaflet = () =>
  src(__dirname + "/node_modules/proj4leaflet/src/proj4leaflet.js").pipe(
    dest(libs_dir + "/proj4leaflet/src/" )
  );

const proj4 = () =>
  src(__dirname + "/node_modules/proj4/dist/*").pipe(
    dest(libs_dir + "/proj4/dist/" )
  );

const openlayers = () =>
  src(__dirname + "/node_modules/ol/dist/ol.js*").pipe(
    dest(libs_dir + "/openlayers/dist/" )
  );

const openlayers_css = () =>
  src(__dirname + "/node_modules/ol/ol.css").pipe(
    dest(libs_dir + "/openlayers/dist/" )
  );


const underscore = () =>
  src(__dirname + "/node_modules/underscore/underscore-min.js*").pipe(
    dest(libs_dir + "/underscore/" )
  );

exports.updateVendorLibs = parallel(
  leaflet,
  leaflet_providers,
  proj4leaflet,
  proj4,
  openlayers,
  openlayers_css,
  underscore
);
