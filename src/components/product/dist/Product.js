"use strict";
exports.__esModule = true;
exports.Product = void 0;
var react_1 = require("react");
var Product_module_scss_1 = require("./Product.module.scss");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
exports.Product = function (_a) {
    var productName = _a.productName, ifNew = _a.ifNew, description = _a.description, productImg = _a.productImg, productId = _a.productId;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: Product_module_scss_1["default"]['product'] },
            react_1["default"].createElement("div", { className: Product_module_scss_1["default"]['product__img-container'] },
                react_1["default"].createElement("img", { src: productImg, alt: productName })),
            react_1["default"].createElement("div", { className: Product_module_scss_1["default"]['product__detail'] },
                ifNew ? (react_1["default"].createElement("div", { className: Product_module_scss_1["default"]['product__new'] }, "NEW PRODUCT")) : (null),
                react_1["default"].createElement("h1", { className: Product_module_scss_1["default"]['product__title'] }, productName),
                react_1["default"].createElement("div", { className: Product_module_scss_1["default"]['product__description'] }, description),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/productItem/" + productId },
                    react_1["default"].createElement(antd_1.Button, { className: Product_module_scss_1["default"]['button-primary'], type: 'primary' }, "SEE PRODUCT"))))));
};
