"use strict";
exports.__esModule = true;
exports.CheckoutPage = void 0;
var react_1 = require("react");
var CheckoutPage_module_scss_1 = require("./CheckoutPage.module.scss");
var mainLayout_1 = require("../../layouts/mainLayout");
var antd_1 = require("antd");
exports.CheckoutPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout'] },
                react_1["default"].createElement("h3", { className: CheckoutPage_module_scss_1["default"]['checkout__title'] }, "CHECKOUT"),
                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__content'] },
                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__left'] }, "left"),
                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__right'] }, "right")),
                react_1["default"].createElement(antd_1.Button, { type: 'primary', className: CheckoutPage_module_scss_1["default"]['button-primary'] }, "Place Order")))));
};
