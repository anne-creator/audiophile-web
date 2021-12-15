"use strict";
exports.__esModule = true;
exports.CheckoutPage = void 0;
var react_1 = require("react");
var CheckoutPage_module_scss_1 = require("./CheckoutPage.module.scss");
var mainLayout_1 = require("../../layouts/mainLayout");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var checkmark_png_1 = require("../../assets/shared/checkmark.png");
exports.CheckoutPage = function () {
    var state = react_router_dom_1.useLocation().state;
    var cartList = state.cartList;
    var cartTotalPrice = state.cartTotalPrice;
    /**    billing and address value initiat and stored
     */
    //shipping info
    var _a = react_1.useState(""), fNameS = _a[0], setFNameS = _a[1];
    var _b = react_1.useState(""), lNameS = _b[0], setLNameS = _b[1];
    var _c = react_1.useState(""), addressS = _c[0], setAddressS = _c[1];
    var _d = react_1.useState(""), ZIPS = _d[0], setZIPS = _d[1];
    var _e = react_1.useState(""), cityS = _e[0], setCityS = _e[1];
    var _f = react_1.useState(""), countryS = _f[0], setCountryS = _f[1];
    //Billing info
    var _g = react_1.useState(""), fNameC = _g[0], setFNameC = _g[1];
    var _h = react_1.useState(""), lNameC = _h[0], setLNameC = _h[1];
    var _j = react_1.useState(""), addressC = _j[0], setAddressC = _j[1];
    var _k = react_1.useState(""), ZIPC = _k[0], setZIPC = _k[1];
    var _l = react_1.useState(""), cityC = _l[0], setCityC = _l[1];
    var _m = react_1.useState(""), countryC = _m[0], setCountryC = _m[1];
    //PAYMNENT
    var _o = react_1.useState(""), fNameP = _o[0], setFNameP = _o[1];
    var _p = react_1.useState(""), lNameP = _p[0], setLNameP = _p[1];
    var _q = react_1.useState(""), ZIPP = _q[0], setZIPP = _q[1];
    var _r = react_1.useState(""), cardNumberP = _r[0], setCardNumberP = _r[1];
    var _s = react_1.useState(""), expireData = _s[0], setExpireDataP = _s[1];
    var _t = react_1.useState(""), CVC = _t[0], setCVCP = _t[1];
    var _u = react_1.useState({}), orderInfo = _u[0], setOrderInfo = _u[1];
    //order info updating when clients enter infomation state
    react_1.useEffect(function () {
        setOrderInfo({
            fNameS: fNameS, lNameS: lNameS, addressS: addressS, ZIPS: ZIPS, cityS: cityS, countryS: countryS, fNameC: fNameC, lNameC: lNameC, addressC: addressC, ZIPC: ZIPC, cityC: cityC, countryC: countryC, fNameP: fNameP, lNameP: lNameP, ZIPP: ZIPP, cardNumberP: cardNumberP, expireData: expireData, CVC: CVC, cartList: cartList, cartTotalPrice: cartTotalPrice
        });
    }, [fNameS, lNameS, addressS, ZIPS, cityS, countryS, fNameC, lNameC, addressC, ZIPC, cityC, countryC, fNameP, lNameP, ZIPP, cardNumberP, expireData, CVC, cartList, cartTotalPrice]);
    //when chicked button: place order 
    //=> show pop up window and dispatch to create a new order info in redux.       
    var _v = react_1.useState(false), showPopUpWindow = _v[0], setShowPopUpWindow = _v[1];
    var handleCheckOutButton = function () {
        setShowPopUpWindow(!showPopUpWindow);
        // dispatch(createNewOrder(orderInfo))
    };
    var history = react_router_dom_1.useHistory();
    var handleBackHomeButton = function () {
        history.push("/");
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout'] },
                (showPopUpWindow) ?
                    (react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['popup'] },
                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['popup__window'] },
                            react_1["default"].createElement("img", { className: CheckoutPage_module_scss_1["default"]['popup__window__checkmark'], src: checkmark_png_1["default"], alt: "checkmark" }),
                            react_1["default"].createElement("h4", { className: CheckoutPage_module_scss_1["default"]['popup__window__thankyou'] }, "THANK YOU FOR YOUR ORDER"),
                            react_1["default"].createElement("p", { className: CheckoutPage_module_scss_1["default"]['popup__window__content'] }, "You will receive an email confirmation shortly."),
                            react_1["default"].createElement("button", { className: CheckoutPage_module_scss_1["default"]['button-primary__popup'], onClick: function () { return handleBackHomeButton(); } }, "BACK TO HOME")),
                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['popup__background'] })))
                    :
                        (null),
                react_1["default"].createElement("h3", { className: CheckoutPage_module_scss_1["default"]['checkout__title'] }, "CHECKOUT"),
                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__content'] },
                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__left'] },
                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing'] },
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__title'] }, "SHIPING ADDRESS"),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__content'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "First Name" }, "First Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setFNameS(event.target.value); }, type: "text", id: "First Name", name: "First Name", placeholder: "First Name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "lname" }, "Last Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setLNameS(event.target.value); }, type: "text", id: "lname", name: "lastname", placeholder: "Your last name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Address" }, "ADDRESS"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setAddressS(event.target.value); }, type: "text", id: "Address", name: "Address", placeholder: "Your Address" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "ZIP Code" }, "ZIP Code"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setZIPS(event.target.value); }, type: "text", id: "ZIP Code", name: "ZIP Code", placeholder: "ZIP Code" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "city" }, "city"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setCityS(event.target.value); }, type: "text", id: "city", name: "city", placeholder: "City" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Country" }, "Country"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setCountryS(event.target.value); }, type: "text", id: "Country", name: "Country", placeholder: "Country" }))),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__title'] }, "BILLING INFO"),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__content'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "fname" }, "First Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setFNameC(event.target.value); }, type: "text", id: "fname", name: "firstname", placeholder: "Your name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "lname" }, "Last Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setLNameC(event.target.value); }, type: "text", id: "lname", name: "lastname", placeholder: "Your last name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Address" }, "ADDRESS"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setAddressC(event.target.value); }, type: "text", id: "Address", name: "Address", placeholder: "Your Address" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "ZIP Code" }, "ZIP Code"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setZIPC(event.target.value); }, type: "text", id: "ZIP Code", name: "ZIP Code", placeholder: "ZIP Code" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "city" }, "city"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setCityC(event.target.value); }, type: "text", id: "city", name: "city", placeholder: "City" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "Country" }, "Country"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setCountryC(event.target.value); }, type: "text", id: "Country", name: "Country", placeholder: "Country" }))),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__title'] }, "PAYMNENT"),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__billing__content'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "First Name" }, "First Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setFNameP(event.target.value); }, type: "text", id: "First Name", name: "First Name", placeholder: "First Name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "lname" }, "Last Name"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setLNameP(event.target.value); }, type: "text", id: "lname", name: "lastname", placeholder: "Your last name" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "ZIP Code" }, "ZIP Code"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setZIPP(event.target.value); }, type: "text", id: "ZIP Code", name: "ZIP Code", placeholder: "ZIP Code" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "fname" }, "Card Number (Credit or Debit)"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setCardNumberP(event.target.value); }, type: "text", id: "fname", name: "firstname", placeholder: "0000 0000 0000 0000" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "expire" }, "Expire Date"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setExpireDataP(event.target.value); }, type: "text", id: "expire", name: "expire", placeholder: "MM/YY" })),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__input-container'] },
                                    react_1["default"].createElement("label", { className: CheckoutPage_module_scss_1["default"]['checkout__input-label'], htmlFor: "cvc" }, "CVC"),
                                    react_1["default"].createElement("input", { className: CheckoutPage_module_scss_1["default"]['checkout__input'], onChange: function (event) { return setCVCP(event.target.value); }, type: "text", id: "cvc", name: "cvc", placeholder: "CVC" }))))),
                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__right'] },
                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__summary'] },
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__summary__title'] }, "SUMMARY"),
                            cartList.map(function (item) {
                                return (react_1["default"].createElement("div", { key: item.id, className: CheckoutPage_module_scss_1["default"]['checkout__summary__content'] },
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['cartItem__info'] },
                                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['cartItem__info__img-container'] },
                                            react_1["default"].createElement("img", { src: item === null || item === void 0 ? void 0 : item.image, alt: item === null || item === void 0 ? void 0 : item.productName })),
                                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['cartItem__info__detail'] },
                                            react_1["default"].createElement("h1", { className: CheckoutPage_module_scss_1["default"]['cartItem__info__title'] }, item === null || item === void 0 ? void 0 : item.productName),
                                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['cartItem__info__price'] }, "$ " + (item === null || item === void 0 ? void 0 : item.price)))),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['cartItem__quanlity'] }, "x " + (item === null || item === void 0 ? void 0 : item.quantity))));
                            }),
                            react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['checkout__summary__price'] },
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__left'] },
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__before-tax'] }, "Price: "),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__tax'] }, "Tax: "),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__shipping'] }, "Shipping: "),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__after-tax'] }, "Total Price: ")),
                                react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__right'] },
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__before-tax-num'] }, cartTotalPrice),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__tax-num'] }, (cartTotalPrice * 0.13).toFixed(2)),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__shipping-num'] }, "Free"),
                                    react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['price__after-tax-num'] }, (cartTotalPrice + cartTotalPrice * 0.13).toFixed(2))))),
                        react_1["default"].createElement("div", { className: CheckoutPage_module_scss_1["default"]['button__container'] },
                            react_1["default"].createElement(antd_1.Button, { type: 'primary', onClick: function () { return handleCheckOutButton(); }, className: CheckoutPage_module_scss_1["default"]['button-primary'] }, "Place Order"))))))));
};
