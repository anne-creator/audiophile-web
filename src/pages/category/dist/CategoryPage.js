"use strict";
exports.__esModule = true;
exports.CategoryPage = void 0;
var react_1 = require("react");
var CategoryPage_module_scss_1 = require("./CategoryPage.module.scss");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../redux/hooks");
var mainLayout_1 = require("../../layouts/mainLayout");
var components_1 = require("../../components");
exports.CategoryPage = function (props) {
    var categories = hooks_1.useSelector(function (s) { return s.categoreis.data; });
    var productList = hooks_1.useSelector(function (s) { return s.productList.data; });
    var categoryId = react_router_dom_1.useParams().categoryId;
    var item = categories[categoryId - 1];
    console.log(productList);
    var products = productList.filter(function (item) { return item.categoryId == categoryId; });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("div", { className: CategoryPage_module_scss_1["default"]['category'] },
                react_1["default"].createElement("h1", { className: CategoryPage_module_scss_1["default"]['category__title'] }, item.title),
                products.map(function (item) {
                    return (react_1["default"].createElement(components_1.Product, { productName: item.productName, ifNew: item.ifNew, description: item.description, productImg: item.productImg }));
                }),
                react_1["default"].createElement(components_1.Categories, null),
                react_1["default"].createElement(components_1.Story, null)))));
};
