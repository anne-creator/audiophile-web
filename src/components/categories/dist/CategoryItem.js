"use strict";
exports.__esModule = true;
exports.CategoryItem = void 0;
var react_1 = require("react");
var CategoryItem_module_scss_1 = require("./CategoryItem.module.scss");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
exports.CategoryItem = function (_a) {
    var categoryId = _a.categoryId, title = _a.title, imageSrc = _a.imageSrc;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: CategoryItem_module_scss_1["default"].item },
            react_1["default"].createElement("div", { className: CategoryItem_module_scss_1["default"]['item__info'] },
                react_1["default"].createElement("div", { className: CategoryItem_module_scss_1["default"]['item__title'] }, title),
                react_1["default"].createElement(antd_1.Button, { className: CategoryItem_module_scss_1["default"]['item__button'], type: "text", shape: "round", size: 'small' },
                    "Shop ",
                    react_1["default"].createElement(icons_1.SwapRightOutlined, null)))),
        react_1["default"].createElement("img", { className: CategoryItem_module_scss_1["default"]['item__img'], src: imageSrc, alt: "headphone" })));
};
