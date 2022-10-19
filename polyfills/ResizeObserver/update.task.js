/* eslint-env node */

"use strict";

var fs = require("graceful-fs");
var path = require("path");
var resizeObserverPolyfillOutput = path.resolve(
	"polyfills/ResizeObserver/polyfill.js"
);

var polyfill = fs.readFileSync(resizeObserverPolyfillOutput, "utf-8");
polyfill +=
	";self.ResizeObserverEntry = exports.ResizeObserverEntry;self.ResizeObserver=exports.ResizeObserver;";
fs.writeFileSync(resizeObserverPolyfillOutput, polyfill, "utf-8");
