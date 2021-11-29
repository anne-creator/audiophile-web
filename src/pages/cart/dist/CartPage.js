"use strict";
exports.__esModule = true;
exports.CartPage = void 0;
var react_1 = require("react");
var CartPage_module_scss_1 = require("./CartPage.module.scss");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var slice_1 = require("../../redux/cartList/slice");
var antd_1 = require("antd");
var mainLayout_1 = require("../../layouts/mainLayout");
exports.CartPage = function () {
    var cartList = hooks_1.useSelector(function (s) { return s.cart.cartList; });
    var cartTotalPrice = hooks_1.useSelector(function (s) { return s.cart.cartTotalPrice; });
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    // when click clear the cart button
    var handleClearButton = function () {
        dispatch(slice_1.clearCart());
    };
    // when click check out button
    var dataPassToCheckout = { cartList: cartList, cartTotalPrice: cartTotalPrice };
    var handleCheckOutButton = function () {
        dispatch(slice_1.clearCart());
        history.push({
            pathname: '/checkout',
            state: dataPassToCheckout // your data array of objects
        });
    };
    //when click any +  or  - button in the cart
    var handleProductQuantity = function (num, productId, itemQuantity, price) {
        if (itemQuantity <= 1 && num === -1) {
            alert('If you wish to remove the item, click "remove it"');
        }
        else {
            dispatch(slice_1.changeProductQuantity({ num: num, productId: productId, itemQuantity: itemQuantity, price: price }));
        }
    };
    //remove specific item 
    var handleRemoveButton = function (productId) {
        dispatch(slice_1.removeItem({ productId: productId }));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart'] },
                react_1["default"].createElement("h3", { className: CartPage_module_scss_1["default"]['cart__title'] }, "Cart"),
                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__seperator'] }),
                cartList.map(function (item, index) {
                    return (react_1["default"].createElement("div", { key: item.productId },
                        react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem'] },
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__left'] },
                                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__img-container'] },
                                    react_1["default"].createElement("img", { src: item === null || item === void 0 ? void 0 : item.image, alt: item === null || item === void 0 ? void 0 : item.productName })),
                                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__detail'] },
                                    react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__name'] }, item === null || item === void 0 ? void 0 : item.productName),
                                    react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__price'] },
                                        "$ ", item === null || item === void 0 ? void 0 :
                                        item.price))),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__right'] },
                                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__decrease-item'], onClick: function () { return handleProductQuantity(-1, item === null || item === void 0 ? void 0 : item.productId, item === null || item === void 0 ? void 0 : item.quantity, item === null || item === void 0 ? void 0 : item.price); } },
                                    react_1["default"].createElement("span", null, "-")),
                                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__quantity'] },
                                    react_1["default"].createElement("span", null,
                                        "x", item === null || item === void 0 ? void 0 :
                                        item.quantity)),
                                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__cartItem__increase-item'], onClick: function () { return handleProductQuantity(1, item === null || item === void 0 ? void 0 : item.productId, item === null || item === void 0 ? void 0 : item.quantity, item === null || item === void 0 ? void 0 : item.price); } },
                                    react_1["default"].createElement("span", null, "+")),
                                react_1["default"].createElement(antd_1.Button, { type: 'primary', onClick: function () { return handleRemoveButton(item === null || item === void 0 ? void 0 : item.productId); } }, "remove"))),
                        react_1["default"].createElement(antd_1.Divider, { className: CartPage_module_scss_1["default"]['cart__cartItem__divider'] })));
                }),
                react_1["default"].createElement(antd_1.Button, { type: 'primary', className: CartPage_module_scss_1["default"]['button-secondary'], onClick: function () { return handleClearButton(); } }, "Clear cart"),
                react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__price'] },
                    react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__price__container'] },
                        react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__price__left'] },
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__before-tax'] }, "Price: "),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__tax'] }, "Tax: "),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__shipping'] }, "Shipping: "),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__after-tax'] }, "Total Price: ")),
                        react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__price__right'] },
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__before-tax-num'] }, cartTotalPrice),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__tax-num'] }, cartTotalPrice * 0.13),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__shipping-num'] }, "Free"),
                            react_1["default"].createElement("div", { className: CartPage_module_scss_1["default"]['cart__after-tax-num'] }, cartTotalPrice * 1.13))),
                    react_1["default"].createElement(antd_1.Button, { type: 'primary', onClick: function () { return handleCheckOutButton(); }, className: CartPage_module_scss_1["default"]['button-primary'] }, " Check Out"))))));
};
