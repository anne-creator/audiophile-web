"use strict";
exports.__esModule = true;
exports.UserLayout = void 0;
var react_1 = require("react");
var UserLayout_module_scss_1 = require("./UserLayout.module.scss");
var logo_png_1 = require("../../assets/logo.png");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
exports.UserLayout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(antd_1.Layout, { className: UserLayout_module_scss_1["default"]["user-layout-container"] },
        react_1["default"].createElement("div", { className: UserLayout_module_scss_1["default"]["content__container"] },
            react_1["default"].createElement("div", { className: UserLayout_module_scss_1["default"]["header"] },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                    react_1["default"].createElement("img", { alt: "logo", className: UserLayout_module_scss_1["default"]["logo"], src: logo_png_1["default"] }),
                    react_1["default"].createElement("div", { className: UserLayout_module_scss_1["default"]["content__des"] }, "AudioPhile,fulfill your audio needs."))),
            react_1["default"].createElement("div", { className: UserLayout_module_scss_1["default"]['content'] }, children))));
};
