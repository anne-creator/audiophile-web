"use strict";
exports.__esModule = true;
exports.addToCart = exports.cartListSlice = void 0;
/** ShoppingList redux stores product items in the cart within the shoppingList object
 *  ShoppingList structure:
 *      const shoppingList = {
         ProductId: 1,
         ProductName: 'ZZxx 99'
         quantity:
         price:
         singleItemtotalPrice:
       }
    ]
*/
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    cartList: []
};
exports.cartListSlice = toolkit_1.createSlice({
    name: 'cartList',
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            var _a, _b, _c;
            var productId = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.productId;
            var itemIndex = state.cartList.findIndex(function (item) { return (item === null || item === void 0 ? void 0 : item.productId) === productId; }); //return the first product index in the array
            if (itemIndex >= 0) { // states/cartlist alreayd has that product 
                console.log(itemIndex);
                console.log(state.cartList[itemIndex].quantity);
                console.log((_b = action.payload) === null || _b === void 0 ? void 0 : _b.quantity);
                state.cartList[itemIndex].quantity += (_c = action.payload) === null || _c === void 0 ? void 0 : _c.quantity; //increase the quantity of that product
            }
            else {
                state.cartList.push(action.payload);
            }
        }
    }
});
exports.addToCart = exports.cartListSlice.actions.addToCart;
