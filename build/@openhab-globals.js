// Injection of openhab-js namespaces as globals inside the addon

(function (global) {
  'use strict';
  Object.assign(globalThis, require('../src/index'));
  // Support legacy NodeJS libraries
  globalThis.global = globalThis;
})(this);
