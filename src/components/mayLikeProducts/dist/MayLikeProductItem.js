"use strict";
exports.__esModule = true;
exports.MayLikeProductItem = void 0;
var react_1 = require("react");
var MayLikeProductItem_module_scss_1 = require("./MayLikeProductItem.module.scss");
var antd_1 = require("antd");
exports.MayLikeProductItem = function (_a) {
    var productImgSrc = _a.productImgSrc, productName = _a.productName;
    return (react_1["default"].createElement("div", { className: MayLikeProductItem_module_scss_1["default"]['item'] },
        react_1["default"].createElement("img", { className: MayLikeProductItem_module_scss_1["default"]['item__img'], src: productImgSrc, alt: productName }),
        react_1["default"].createElement("h2", { className: MayLikeProductItem_module_scss_1["default"]['item__title'] }, productName),
        react_1["default"].createElement(antd_1.Button, { type: "primary", className: MayLikeProductItem_module_scss_1["default"]['item__button'] }, "SEE PRODUCT")));
};
