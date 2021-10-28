"use strict";
exports.__esModule = true;
exports.Categories = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var Categories_module_scss_1 = require("./Categories.module.scss");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var CategoryItem_1 = require("./CategoryItem");
var slice_1 = require("../../redux/categories/slice");
var react_router_dom_1 = require("react-router-dom");
exports.Categories = function () {
    /**fetch data from store */
    var categories = hooks_1.useSelector(function (s) { return s.categoreis.data; });
    var error = hooks_1.useSelector(function (s) { return s.categoreis.error; });
    var loading = hooks_1.useSelector(function (s) { return s.categoreis.loading; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(slice_1.getCategories(0));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(categories);
    if (error) {
        return react_1["default"].createElement("div", null, error);
    }
    if (loading) {
        return (react_1["default"].createElement(antd_1.Spin, { size: "large", style: {
                marginTop: 200,
                marginBottom: 200,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%"
            } }));
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Row, { className: Categories_module_scss_1["default"]['category'], gutter: [16, { xs: 32, sm: 64, md: 128, lg: 256 }] }, categories.map(function (item) {
            return (react_1["default"].createElement(antd_1.Col, { key: item.categoryId, className: Categories_module_scss_1["default"]['col'], xs: 24, sm: 24, md: 8 },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/categories/" + item.categoryId },
                    react_1["default"].createElement(CategoryItem_1.CategoryItem, { categoryId: item.id, title: item.title, imageSrc: item.imageSrc }))));
        }))));
};
