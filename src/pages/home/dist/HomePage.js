"use strict";
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
var components_1 = require("../../components");
var mainLayout_1 = require("../../layouts/mainLayout");
var HomePage_module_scss_1 = require("./HomePage.module.scss");
var antd_1 = require("antd");
var hero_png_1 = require("../../assets/hero.png");
exports.HomePage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['homePage'] },
            react_1["default"].createElement(mainLayout_1.MainLayout, null,
                react_1["default"].createElement(antd_1.Row, { className: HomePage_module_scss_1["default"]['hero'], align: "middle", justify: "space-around" },
                    react_1["default"].createElement(antd_1.Col, { xs: 24, sm: 24, md: 24, lg: 10, className: HomePage_module_scss_1["default"]['hero__detail__container'] },
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['hero__detail'] },
                            react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['hero__detail__new'] }, "NEW PRODUCT"),
                            react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['hero__detail__title'] }, "XX99 MARK II HEADPHONES"),
                            react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['hero__detail__des'] }, "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."),
                            react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['button-primary'], type: 'primary' }, "SEE PRODUCT"))),
                    react_1["default"].createElement(antd_1.Col, { xs: 24, sm: 24, md: 24, lg: 14, className: HomePage_module_scss_1["default"]['hero__img-container'] },
                        react_1["default"].createElement("img", { src: hero_png_1["default"], alt: "XX99", className: HomePage_module_scss_1["default"]['hero__img'] }))),
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['shop'] },
                    react_1["default"].createElement(components_1.Categories, null),
                    react_1["default"].createElement(components_1.RecommandProducts, null))))));
};
