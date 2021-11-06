"use strict";
exports.__esModule = true;
exports.CategoryPage = void 0;
var react_1 = require("react");
var CategoryPage_module_scss_1 = require("./CategoryPage.module.scss");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../redux/hooks");
var mainLayout_1 = require("../../layouts/mainLayout");
var components_1 = require("../../components");
var react_redux_1 = require("react-redux");
var slice_1 = require("../../redux/productPromote/slice");
exports.CategoryPage = function (props) {
    var categories = hooks_1.useSelector(function (s) { return s.categoreis.data; });
    var productList = hooks_1.useSelector(function (s) { return s.productPromote.data; });
    var categoryId = react_router_dom_1.useParams().categoryId;
    var item = categories[categoryId - 1];
    var dispatch = react_redux_1.useDispatch();
    /** Get all product and filted it with categoryID */
    react_1.useEffect(function () {
        dispatch(slice_1.getProductPromote({}));
    }, []);
    var products = productList.filter(function (item) { return item.categoryId == categoryId; });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("h1", { className: CategoryPage_module_scss_1["default"]['title'] }, item.title),
            react_1["default"].createElement("div", { className: CategoryPage_module_scss_1["default"]['category'] },
                products.map(function (item) {
                    var _a;
                    return (react_1["default"].createElement(components_1.Product, { productId: item === null || item === void 0 ? void 0 : item.productId, productName: item === null || item === void 0 ? void 0 : item.productName, ifNew: item === null || item === void 0 ? void 0 : item.ifNew, description: item === null || item === void 0 ? void 0 : item.description, productImg: (_a = item === null || item === void 0 ? void 0 : item.imageSrcList) === null || _a === void 0 ? void 0 : _a.productImg }));
                }),
                react_1["default"].createElement(components_1.Categories, null),
                react_1["default"].createElement(components_1.Story, null)))));
};
