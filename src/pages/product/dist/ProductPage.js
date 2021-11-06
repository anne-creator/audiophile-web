"use strict";
/** Show Singer product detail in this page.
 *  @param productId
 *  dispatch cart item information to redux store cartList slice
*/
exports.__esModule = true;
exports.ProductPage = void 0;
var react_1 = require("react");
var ProductPage_module_scss_1 = require("./ProductPage.module.scss");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var slice_1 = require("../../redux/productItem/slice");
var components_1 = require("../../components");
var mainLayout_1 = require("../../layouts/mainLayout");
var antd_1 = require("antd");
var slice_2 = require("../../redux/cartList/slice");
exports.ProductPage = function (props) {
    var _a, _b, _c, _d, _e;
    var productId = react_router_dom_1.useParams().productId;
    var dispatch = react_redux_1.useDispatch();
    var jwt = hooks_1.useSelector(function (s) { return s.user.token; });
    var history = react_router_dom_1.useHistory();
    /** Get product by its productid */
    react_1.useEffect(function () {
        dispatch(slice_1.getProductItem("" + productId));
        // dispatch(getProductPromote({}))
    }, []);
    var data = hooks_1.useSelector(function (s) { return s.productItem.data; });
    var error = hooks_1.useSelector(function (s) { return s.productItem.error; });
    var loading = hooks_1.useSelector(function (s) { return s.productItem.loading; });
    var productItem = data === null || data === void 0 ? void 0 : data["function"];
    //handle product quantity
    var _f = react_1.useState(1), productQuantity = _f[0], setProductQuantity = _f[1];
    var _g = react_1.useState({}), cartItem = _g[0], setCartItem = _g[1];
    var handleProductQuantity = function (num) {
        if (num === 1 && productQuantity <= 99 || num === -1 && productQuantity >= 1) {
            setProductQuantity(productQuantity + num);
        }
    };
    /** update cartItem whenever productQuantity changes */
    react_1.useEffect(function () {
        var _a;
        setCartItem({
            productId: productItem === null || productItem === void 0 ? void 0 : productItem.productId,
            ProductName: productItem === null || productItem === void 0 ? void 0 : productItem.productName,
            quantity: productQuantity,
            ifChecked: true,
            price: (productItem === null || productItem === void 0 ? void 0 : productItem.price) * productQuantity,
            singleItemtotalPrice: productItem === null || productItem === void 0 ? void 0 : productItem.price,
            image: (_a = productItem === null || productItem === void 0 ? void 0 : productItem.imageSrcList) === null || _a === void 0 ? void 0 : _a.categoryImg
        });
    }, [productQuantity]);
    /** dispatch cartItem to store when clicked add to cart */
    var handleAddtoCart = function () {
        if (!jwt) {
            history.push("/signIn");
        }
        else {
            dispatch(slice_2.addToCart(cartItem));
            setProductQuantity(0);
        }
    };
    if (loading) {
        return (react_1["default"].createElement(antd_1.Spin, { size: "large", style: {
                marginTop: 200,
                marginBottom: 200,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%"
            } }));
    }
    if (error) {
        return react_1["default"].createElement("div", null,
            "\u7F51\u7AD9\u51FA\u9519\uFF1A",
            error);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mainLayout_1.MainLayout, null,
            react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product-page'] },
                react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product'] },
                    react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__main'] },
                        react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__img-container'] },
                            react_1["default"].createElement("img", { src: (_a = productItem === null || productItem === void 0 ? void 0 : productItem.imageSrcList) === null || _a === void 0 ? void 0 : _a.productImg, alt: productItem === null || productItem === void 0 ? void 0 : productItem.productName })),
                        react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__detail'] },
                            (productItem === null || productItem === void 0 ? void 0 : productItem.ifNew) ? (react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__new'] }, "NEW PRODUCT")) : (null),
                            react_1["default"].createElement("h1", { className: ProductPage_module_scss_1["default"]['product__title'] }, productItem === null || productItem === void 0 ? void 0 : productItem.productName),
                            react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__description'] }, productItem === null || productItem === void 0 ? void 0 : productItem.description),
                            react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__price'] }, "$ " + (productItem === null || productItem === void 0 ? void 0 : productItem.price)),
                            react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__cart'] },
                                react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__cal'] },
                                    react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__cal__item'], onClick: function () { return handleProductQuantity(-1); } }, "-"),
                                    react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__cal__item'] }, productQuantity),
                                    react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__cal__item'], onClick: function () { return handleProductQuantity(1); } }, "+")),
                                react_1["default"].createElement(antd_1.Button, { onClick: function () { return handleAddtoCart(); }, className: ProductPage_module_scss_1["default"]['button-primary'], type: 'primary' }, "ADD TO CART")))),
                    react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__feature-and-inbox'] },
                        react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__features'] },
                            react_1["default"].createElement("h1", { className: ProductPage_module_scss_1["default"]['product__features__title'] }, "Features"), productItem === null || productItem === void 0 ? void 0 :
                            productItem.features.map(function (item) {
                                return (react_1["default"].createElement("p", null, item));
                            })),
                        react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__in-the-box'] },
                            react_1["default"].createElement("h1", { className: ProductPage_module_scss_1["default"]['product__in-the-box__title'] }, "In The Box"), (_b = productItem === null || productItem === void 0 ? void 0 : productItem.inTheBox) === null || _b === void 0 ? void 0 :
                            _b.map(function (item) {
                                return (react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__in-the-box__content'] },
                                    react_1["default"].createElement("span", { style: { color: '#D87D4A', marginRight: '10px' } }, item[1] + "x"),
                                    react_1["default"].createElement("span", null, item[0])));
                            }))),
                    react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__gallery'] },
                        react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__gallery__left'] },
                            react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__gallery1'] },
                                react_1["default"].createElement("img", { src: (_c = productItem === null || productItem === void 0 ? void 0 : productItem.imageSrcList) === null || _c === void 0 ? void 0 : _c.gallery1Img, alt: productItem === null || productItem === void 0 ? void 0 : productItem.productName })),
                            react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__gallery2'] },
                                react_1["default"].createElement("img", { src: (_d = productItem === null || productItem === void 0 ? void 0 : productItem.imageSrcList) === null || _d === void 0 ? void 0 : _d.gallery2Img, alt: productItem === null || productItem === void 0 ? void 0 : productItem.productName }))),
                        react_1["default"].createElement("div", { className: ProductPage_module_scss_1["default"]['product__gallery3'] },
                            react_1["default"].createElement("img", { src: (_e = productItem === null || productItem === void 0 ? void 0 : productItem.imageSrcList) === null || _e === void 0 ? void 0 : _e.gallery3Img, alt: productItem === null || productItem === void 0 ? void 0 : productItem.productName })))),
                react_1["default"].createElement(components_1.MayLikeProducts, null),
                react_1["default"].createElement(components_1.Categories, null),
                react_1["default"].createElement(components_1.Story, null)))));
};
