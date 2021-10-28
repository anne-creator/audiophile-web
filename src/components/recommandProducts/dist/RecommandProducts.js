"use strict";
exports.__esModule = true;
exports.RecommandProducts = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var RecommandProducts_module_scss_1 = require("./RecommandProducts.module.scss");
var hooks_1 = require("../../redux/hooks");
exports.RecommandProducts = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var productList = hooks_1.useSelector(function (s) { return s.productList.data; });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(antd_1.Row, { className: RecommandProducts_module_scss_1["default"]['ZX9'] },
                react_1["default"].createElement(antd_1.Col, { xs: 24, sm: 24, md: 24, lg: 12 },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__left'] },
                        react_1["default"].createElement("img", { className: RecommandProducts_module_scss_1["default"]['ZX9__img'], src: (_b = (_a = productList[3]) === null || _a === void 0 ? void 0 : _a.imageSrcList) === null || _b === void 0 ? void 0 : _b.recommand, alt: "ZX9 product" }))),
                react_1["default"].createElement(antd_1.Col, { xs: 24, sm: 24, md: 24, lg: 12 },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__right'] },
                        react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail'] },
                            ((_c = productList[3]) === null || _c === void 0 ? void 0 : _c.ifNew) ? (react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__new'] }, "NEW PRODUCT")) : (null),
                            react_1["default"].createElement("h1", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__title'] },
                                "ZX9",
                                react_1["default"].createElement("br", null),
                                "SPEAKER"),
                            react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__description'] }, (_d = productList[3]) === null || _d === void 0 ? void 0 : _d.description),
                            react_1["default"].createElement(antd_1.Button, { className: RecommandProducts_module_scss_1["default"]['button-primary'], type: 'primary' }, "SEE PRODUCT"))))),
            react_1["default"].createElement(antd_1.Row, { className: RecommandProducts_module_scss_1["default"]['ZX7'] },
                react_1["default"].createElement(antd_1.Col, { className: RecommandProducts_module_scss_1["default"]['ZX7__left'] },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX7__detail'] },
                        react_1["default"].createElement("h1", null, "ZX7 SPEAKER"),
                        react_1["default"].createElement(antd_1.Button, { className: RecommandProducts_module_scss_1["default"]['button__secondary'] }, "SEE PRODUCT"))),
                react_1["default"].createElement("img", { className: RecommandProducts_module_scss_1["default"]['ZX7__img'], src: (_f = (_e = productList[4]) === null || _e === void 0 ? void 0 : _e.imageSrcList) === null || _f === void 0 ? void 0 : _f.recommand, alt: "ZX9 product" })),
            react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1'] },
                react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1__left'] },
                    react_1["default"].createElement("img", { className: RecommandProducts_module_scss_1["default"]['YX1__img'], src: (_h = (_g = productList[5]) === null || _g === void 0 ? void 0 : _g.imageSrcList) === null || _h === void 0 ? void 0 : _h.recommand, alt: "ZX9 product" })),
                react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1__right'] },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1__detail'] },
                        react_1["default"].createElement("h1", null, "ZX7 SPEAKER"),
                        react_1["default"].createElement(antd_1.Button, { className: RecommandProducts_module_scss_1["default"]['button__secondary'] }, "SEE PRODUCT")))))));
};
