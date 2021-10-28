"use strict";
exports.__esModule = true;
exports.Product = void 0;
var React = require("react");
exports.Product = function (_a) {
    var productName = _a.productName, ifNew = _a.ifNew, description = _a.description, productImg = _a.productImg;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            "this is one product Item ",
            productName)));
};
