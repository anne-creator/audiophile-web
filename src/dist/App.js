"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_module_css_1 = require("./App.module.css");
var pages_1 = require("./pages");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (react_1["default"].createElement("div", { className: App_module_css_1["default"]['app'] },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: pages_1.HomePage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/signIn", component: pages_1.SignInPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", component: pages_1.RegisterPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/categories/:categoryId", component: pages_1.CategoryPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/productItem/:productId", component: pages_1.ProductPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/productItem/:productId", component: pages_1.ProductPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/cart", component: pages_1.CartPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/checkout", component: pages_1.CheckoutPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { render: function () { return react_1["default"].createElement("h1", null, " 404 page not found "); } })))));
}
exports["default"] = App;
