"use strict";
exports.__esModule = true;
exports.CartPage = void 0;
var react_1 = require("react");
var CartPage_module_scss_1 = require("./CartPage.module.scss");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var slice_1 = require("../../redux/cartList/slice");
var antd_1 = require("antd");
exports.CartPage = function () {
    var cartList = hooks_1.useSelector(function (s) { return s.cart.cartList; });
    var cartTotalPrice = hooks_1.useSelector(function (s) { return s.cart.cartTotalPrice; });
    var cartQuantity = hooks_1.useSelector(function (s) { return s.cart.cartQuantity; });
    var dispatch = react_redux_1.useDispatch();
    var handleClearButton = function () {
        dispatch(slice_1.clearCart());
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart'] },
            react_1["default"].createElement("div", null, cartTotalPrice),
            react_1["default"].createElement("div", null, cartQuantity),
            react_1["default"].createElement(antd_1.Button, { onClick: function () { return handleClearButton(); } }, " Clear Cart"))));
};
