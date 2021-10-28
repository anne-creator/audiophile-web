"use strict";
exports.__esModule = true;
exports.Story = void 0;
var Story_module_scss_1 = require("./Story.module.scss");
var react_1 = require("react");
var story_png_1 = require("../../assets/story.png");
exports.Story = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: Story_module_scss_1["default"]['story'] },
            react_1["default"].createElement("div", { className: Story_module_scss_1["default"]['story__content'] },
                react_1["default"].createElement("div", { className: Story_module_scss_1["default"]['story__title'] }, "Bringing you the best audio gear"),
                react_1["default"].createElement("div", { className: Story_module_scss_1["default"]['story__detail'] }, "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.")),
            react_1["default"].createElement("img", { className: Story_module_scss_1["default"]['story__img'], src: story_png_1["default"] }))));
};
