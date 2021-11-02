"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var Footer_module_scss_1 = require("./Footer.module.scss");
var logo_png_1 = require("../../assets/logo.png");
var fb_png_1 = require("../../assets/fb.png");
var twitter_png_1 = require("../../assets/twitter.png");
var ins_png_1 = require("../../assets/ins.png");
var react_router_dom_1 = require("react-router-dom");
exports.Footer = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: Footer_module_scss_1["default"].footer },
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"].content },
                react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['content__left'] },
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['content__left__img'] },
                        react_1["default"].createElement("img", { className: Footer_module_scss_1["default"]['content__left__'], src: logo_png_1["default"], alt: "logo" })),
                    react_1["default"].createElement("p", { className: Footer_module_scss_1["default"]['content__left__description'] }, "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we\u2019re open 7 days a week."),
                    react_1["default"].createElement("p", { className: Footer_module_scss_1["default"]['content__left__copyright'] }, "Copyright 2021. All Rights Reserved")),
                react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['content__right'] },
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['content__right__nav'] },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/:categoryId', className: Footer_module_scss_1["default"]['item'] },
                            react_1["default"].createElement("span", null, "HOME")),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/:categoryId', className: Footer_module_scss_1["default"]['item'] },
                            react_1["default"].createElement("span", null, "HEADPHONES")),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/:categoryId', className: Footer_module_scss_1["default"]['item'] },
                            react_1["default"].createElement("span", null, "SPEAKERS")),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/:categoryId', className: Footer_module_scss_1["default"]['item'] },
                            react_1["default"].createElement("span", null, "EARPHONES"))),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['content__right__social'] },
                        react_1["default"].createElement("img", { className: Footer_module_scss_1["default"]['social-icon'], src: fb_png_1["default"], alt: "fb" }),
                        react_1["default"].createElement("img", { className: Footer_module_scss_1["default"]['social-icon'], src: ins_png_1["default"], alt: "ins" }),
                        react_1["default"].createElement("img", { className: Footer_module_scss_1["default"]['social-icon'], src: twitter_png_1["default"], alt: "twitter" })))))));
};
