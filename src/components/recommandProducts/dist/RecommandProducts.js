"use strict";
exports.__esModule = true;
exports.RecommandProducts = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var RecommandProducts_module_scss_1 = require("./RecommandProducts.module.scss");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var slice_1 = require("../../redux/productPromote/slice");
var react_router_dom_1 = require("react-router-dom");
exports.RecommandProducts = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(slice_1.getProductPromote({}));
    }, []);
    var productPromote = hooks_1.useSelector(function (s) { return s.productPromote.data; });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(antd_1.Row, { className: RecommandProducts_module_scss_1["default"]['ZX9'] },
                react_1["default"].createElement(antd_1.Col, { xs: 24, sm: 24, md: 24, lg: 12 },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__left'] },
                        react_1["default"].createElement("img", { className: RecommandProducts_module_scss_1["default"]['ZX9__img'], src: (_b = (_a = productPromote[3]) === null || _a === void 0 ? void 0 : _a.imageSrcList) === null || _b === void 0 ? void 0 : _b.recommand, alt: "ZX9 product" }))),
                react_1["default"].createElement(antd_1.Col, { xs: 24, sm: 24, md: 24, lg: 12 },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__right'] },
                        react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail'] },
                            ((_c = productPromote[3]) === null || _c === void 0 ? void 0 : _c.ifNew) ? (react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__new'] }, "NEW PRODUCT")) : (null),
                            react_1["default"].createElement("h1", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__title'] },
                                "ZX9",
                                react_1["default"].createElement("br", null),
                                "SPEAKER"),
                            react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__description'] }, (_d = productPromote[3]) === null || _d === void 0 ? void 0 : _d.description),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: '/productItem/4' },
                                react_1["default"].createElement(antd_1.Button, { className: RecommandProducts_module_scss_1["default"]['button-primary'], type: 'primary' }, "SEE PRODUCT")))))),
            react_1["default"].createElement(antd_1.Row, { className: RecommandProducts_module_scss_1["default"]['ZX7'] },
                react_1["default"].createElement(antd_1.Col, { className: RecommandProducts_module_scss_1["default"]['ZX7__left'] },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX7__detail'] },
                        ((_e = productPromote[4]) === null || _e === void 0 ? void 0 : _e.ifNew) ? (react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__new'] }, "NEW PRODUCT")) : (null),
                        react_1["default"].createElement("h1", null, "ZX7 SPEAKER"),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/productItem/5' },
                            react_1["default"].createElement(antd_1.Button, { className: RecommandProducts_module_scss_1["default"]['button__secondary'] }, "SEE PRODUCT")))),
                react_1["default"].createElement("img", { className: RecommandProducts_module_scss_1["default"]['ZX7__img'], src: (_g = (_f = productPromote[4]) === null || _f === void 0 ? void 0 : _f.imageSrcList) === null || _g === void 0 ? void 0 : _g.recommand, alt: "ZX9 product" })),
            react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1'] },
                react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1__left'] },
                    react_1["default"].createElement("img", { className: RecommandProducts_module_scss_1["default"]['YX1__img'], src: (_j = (_h = productPromote[5]) === null || _h === void 0 ? void 0 : _h.imageSrcList) === null || _j === void 0 ? void 0 : _j.recommand, alt: "ZX9 product" })),
                react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1__right'] },
                    react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['YX1__detail'] },
                        ((_k = productPromote[5]) === null || _k === void 0 ? void 0 : _k.ifNew) ? (react_1["default"].createElement("div", { className: RecommandProducts_module_scss_1["default"]['ZX9__detail__new'] }, "NEW PRODUCT")) : (null),
                        react_1["default"].createElement("h1", null, "ZX7 SPEAKER"),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/productItem/6' },
                            react_1["default"].createElement(antd_1.Button, { className: RecommandProducts_module_scss_1["default"]['button__secondary'] }, "SEE PRODUCT"))))))));
};
