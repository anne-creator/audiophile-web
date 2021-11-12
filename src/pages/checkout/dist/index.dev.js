"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CheckoutPage = require("./CheckoutPage");

Object.keys(_CheckoutPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CheckoutPage[key];
    }
  });
});