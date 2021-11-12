"use strict";
var _a;
exports.__esModule = true;
exports.removeItem = exports.changeProductQuantity = exports.clearCart = exports.addToCart = exports.cartListSlice = void 0;
/** ShoppingList redux stores product items in the cart within the shoppingList object
 *  ShoppingList structure:
 *      const shoppingList = {
         ProductId: 1,
         ProductName: 'ZZxx 99'
         quantity:
         price:
         singleItemTotalPrice:
       }
    ]
*/
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    cartList: [],
    cartQuantity: 0,
    cartTotalPrice: 0
};
exports.cartListSlice = toolkit_1.createSlice({
    name: 'cartList',
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            var _a, _b, _c, _d, _e;
            var productId = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.productId;
            var itemIndex = state.cartList.findIndex(function (item) { return (item === null || item === void 0 ? void 0 : item.productId) === productId; }); //return the first product index in the array
            if (itemIndex >= 0) { // states/cartlist alreayd has that product 
                state.cartList[itemIndex].quantity += (_b = action.payload) === null || _b === void 0 ? void 0 : _b.quantity; //increase the quantity of that product
                state.cartList[itemIndex].singleItemTotalPrice += (_c = action.payload) === null || _c === void 0 ? void 0 : _c.singleItemTotalPrice;
            }
            else {
                state.cartList.push(action.payload);
            }
            // update cartQuantity and cart price;
            state.cartQuantity += (_d = action.payload) === null || _d === void 0 ? void 0 : _d.quantity;
            state.cartTotalPrice += (_e = action.payload) === null || _e === void 0 ? void 0 : _e.singleItemTotalPrice;
        },
        clearCart: function (state) {
            state.cartList = [];
            state.cartQuantity = 0;
            state.cartTotalPrice = 0;
        },
        changeProductQuantity: function (state, action) {
            var _a, _b, _c, _d, _e, _f, _g;
            var productId = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.productId;
            var itemIndex = state.cartList.findIndex(function (item) { return (item === null || item === void 0 ? void 0 : item.productId) === productId; }); //find the item in the state
            state.cartList[itemIndex].quantity += (_b = action.payload) === null || _b === void 0 ? void 0 : _b.num;
            // mind the changing order below.
            state.cartList[itemIndex].singleItemtotalPrice += ((_c = action.payload) === null || _c === void 0 ? void 0 : _c.num) * ((_d = action.payload) === null || _d === void 0 ? void 0 : _d.price);
            state.cartQuantity += (_e = action.payload) === null || _e === void 0 ? void 0 : _e.num;
            state.cartTotalPrice += ((_f = action.payload) === null || _f === void 0 ? void 0 : _f.num) * ((_g = action.payload) === null || _g === void 0 ? void 0 : _g.price);
        },
        removeItem: function (state, action) {
            var _a;
            var productId = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.productId;
            var itemIndex = state.cartList.findIndex(function (item) { return (item === null || item === void 0 ? void 0 : item.productId) === productId; }); //find the item in the state
            state.cartQuantity -= state.cartList[itemIndex].quantity;
            state.cartTotalPrice -= state.cartList[itemIndex].singleItemTotalPrice;
            state.cartList.splice(itemIndex, 1);
        }
    }
});
exports.addToCart = (_a = exports.cartListSlice.actions, _a.addToCart), exports.clearCart = _a.clearCart, exports.changeProductQuantity = _a.changeProductQuantity, exports.removeItem = _a.removeItem;
