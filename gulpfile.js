const path = require("path");
const { src, watch, dest, parallel } = require("gulp");

const libs_dir = __dirname + "/ckanext/geoview/public/js/vendor"

const jszip = () =>
  src(__dirname + "/node_modules/jszip/dist/jszip.min.js").pipe(
    dest(libs_dir + "/jszip/dist/" )
  );

const jszip_utils = () =>
  src(__dirname + "/node_modules/jszip-utils/dist/jszip-utils.min.js").pipe(
    dest(libs_dir + "/jszip-utils/dist/" )
  );

const leaflet = () =>
  src(__dirname + "/node_modules/leaflet/dist/**/*").pipe(
    dest(libs_dir + "/leaflet/dist/" )
  );

const leaflet_providers = () =>
  src(__dirname + "/node_modules/leaflet-providers/leaflet-providers.js").pipe(
    dest(libs_dir + "/leaflet-providers/" )
  );

const leaflet_spin = () =>
  src(__dirname + "/node_modules/leaflet-spin/leaflet.spin.js").pipe(
    dest(libs_dir + "/leaflet-spin/" )
  );

const openlayers = () =>
  src(__dirname + "/node_modules/ol/dist/ol.js*").pipe(
    dest(libs_dir + "/openlayers/dist/" )
  );

const openlayers_css = () =>
  src(__dirname + "/node_modules/ol/ol.css").pipe(
    dest(libs_dir + "/openlayers/dist/" )
  );

const proj4leaflet = () =>
  src(__dirname + "/node_modules/proj4leaflet/src/proj4leaflet.js").pipe(
    dest(libs_dir + "/proj4leaflet/src/" )
  );

const proj4 = () =>
  src(__dirname + "/node_modules/proj4/dist/*").pipe(
    dest(libs_dir + "/proj4/dist/" )
  );

const spinjs = () =>
  src(__dirname + "/node_modules/spin.js/spin.js").pipe(
    dest(libs_dir + "/spin.js/" )
  );

const underscore = () =>
  src(__dirname + "/node_modules/underscore/underscore-min.js*").pipe(
    dest(libs_dir + "/underscore/" )
  );

exports.updateVendorLibs = parallel(
  jszip,
  jszip_utils,
  leaflet,
  leaflet_providers,
  leaflet_spin,
  openlayers,
  openlayers_css,
  proj4leaflet,
  proj4,
  spinjs,
  underscore
);
