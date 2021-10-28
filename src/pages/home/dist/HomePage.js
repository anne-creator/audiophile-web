"use strict";
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
var components_1 = require("../../components");
var mainLayout_1 = require("../../layouts/mainLayout");
var HomePage_module_scss_1 = require("./HomePage.module.scss");
exports.HomePage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(mainLayout_1.MainLayout, null,
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['shop'] },
                    react_1["default"].createElement(components_1.Categories, null),
                    react_1["default"].createElement(components_1.RecommandProducts, null))))));
};
