"use strict";
exports.__esModule = true;
exports.CheckoutPage = void 0;
var react_1 = require("react");
var CheckoutPage_module_scss_1 = require("./CheckoutPage.module.scss");
var hooks_1 = require("../../redux/hooks");
var mainLayout_1 = require("../../layouts/mainLayout");
var antd_1 = require("antd");
exports.CheckoutPage = function () {
    // const dispatch = useDispatch();
    var cartList = hooks_1.useSelector(function (s) { return s.cart.cartList; });
    var cartTotalPrice = hooks_1.useSelector(function (s) { return s.cart.cartTotalPrice; });
    console.log(cartList);
    console.log(cartTotalPrice);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout'] },
                react_1["default"].createElement("h3", { className: CheckoutPage_module_scss_1["default"]['checkout__title'] }, "CHECKOUT"),
                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__content'] },
                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__left'] },
                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing'] },
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__title'] }, "SHIPING ADDRESS"),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__content'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "First Name" }, "First Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "First Name", name: "First Name", placeholder: "First Name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "lname" }, "Last Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "lname", name: "lastname", placeholder: "Your last name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Address" }, "ADDRESS"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "Address", name: "Address", placeholder: "Your Address" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "ZIP Code" }, "ZIP Code"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "ZIP Code", name: "ZIP Code", placeholder: "ZIP Code" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "city" }, "city"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "city", name: "city", placeholder: "City" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Country" }, "Country"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "Country", name: "Country", placeholder: "Country" }))),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__title'] }, "BILLING INFO"),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__content'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "fname" }, "First Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "fname", name: "firstname", placeholder: "Your name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "lname" }, "Last Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "lname", name: "lastname", placeholder: "Your last name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Address" }, "ADDRESS"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "Address", name: "Address", placeholder: "Your Address" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "ZIP Code" }, "ZIP Code"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "ZIP Code", name: "ZIP Code", placeholder: "ZIP Code" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "city" }, "city"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "city", name: "city", placeholder: "City" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Country" }, "Country"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "Country", name: "Country", placeholder: "Country" }))),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__title'] }, "PAYMNENT"),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__content'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "fname" }, "Card Number (Credit or Debit)"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "fname", name: "firstname", placeholder: "0000 0000 0000 0000" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "expire" }, "Expire Date"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "expire", name: "expire", placeholder: "MM/YY" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "cvc" }, "CVC"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], type: "text", id: "cvc", name: "cvc", placeholder: "CVC" }))))),
                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__right'] },
                        "right",
                        react_1["default"].createElement(antd_1.Button, { type: 'primary', className: CheckoutPage_module_scss_1["default"]['button-primary'] }, "Place Order")))))));
};
