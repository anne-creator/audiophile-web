"use strict";
exports.__esModule = true;
exports.MayLikeProducts = void 0;
var react_1 = require("react");
var MayLikeProducts_module_scss_1 = require("./MayLikeProducts.module.scss");
var MayLikeProductItem_1 = require("./MayLikeProductItem");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
var slice_1 = require("../../redux/productPromote/slice");
exports.MayLikeProducts = function () {
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(slice_1.getProductPromote({}));
        // eslint-disable-next-line
    }, []);
    var productList = hooks_1.useSelector(function (s) { return s.productPromote.data; });
    var getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //max excluded
    };
    /** get 4 randome unreplicated index */
    var randomItemIndex = [];
    var randomeIndexList = function (num) {
        var productListLength = productList.length;
        var indexArray = Array.from(Array(productListLength).keys()); //create an array from 0 to productListLength (productListLength not included)
        /** if the length of productList is less than 4, return an array from 0 to productListLength,
         *  else: return an array with 4 random unreplicated number chose from a array from 0 to productListLength
         *  to genferate frou random unreplicated items from productList.
        */
        if (productListLength <= num) {
            return Array.from(Array(productListLength).keys());
        }
        else {
            var end = productListLength - 1;
            for (var i = 0; i < num; i++) {
                var random = getRandomInt(0, end + 1); //choose a random int from [0,end] (inclusive)
                randomItemIndex[i] = indexArray[random];
                indexArray[random] = indexArray[end]; //include the end number in the array and exclued the end number to choose from
                end--;
            }
        }
    };
    randomeIndexList(4);
    // console.log(productList);
    // console.log(randomItemIndex[0]);
    // console.log(randomItemIndex);
    return (react_1["default"].createElement("div", { className: MayLikeProducts_module_scss_1["default"]['may-like-products'] },
        react_1["default"].createElement("h1", { className: MayLikeProducts_module_scss_1["default"]['may-like-products__title'] }, "You May Also Like"),
        react_1["default"].createElement("div", { className: MayLikeProducts_module_scss_1["default"]['may-like-products__grid'] }, randomItemIndex.map(function (item) {
            var _a, _b, _c;
            return (react_1["default"].createElement(MayLikeProductItem_1.MayLikeProductItem, { productImgSrc: (_b = (_a = productList[item]) === null || _a === void 0 ? void 0 : _a.imageSrcList) === null || _b === void 0 ? void 0 : _b.productImg, productName: (_c = productList[item]) === null || _c === void 0 ? void 0 : _c.productName }));
        }))));
};
