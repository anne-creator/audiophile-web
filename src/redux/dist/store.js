"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("./categories/slice");
var slice_2 = require("./productPromote/slice");
var slice_3 = require("./productItem/slice");
var slice_4 = require("./user/slice");
var slice_5 = require("./cartList/slice");
var redux_persist_1 = require("redux-persist"); //make store persist
var storage_1 = require("redux-persist/lib/storage"); //using local storage
/**  config code persist*/
var persistConfig = {
    key: "root",
    storage: storage_1["default"]
};
var rootReducer = toolkit_1.combineReducers({
    categoreis: slice_1.categoriesSlice.reducer,
    productPromote: slice_2.productPromoteSlice.reducer,
    productItem: slice_3.productItemSlice.reducer,
    user: slice_4.userSlice.reducer,
    cart: slice_5.cartListSlice.reducer
});
//  make persistedReducer useing persistReducer() 
var persistedReducer = redux_persist_1.persistReducer(persistConfig, rootReducer);
var store = toolkit_1.configureStore({
    reducer: persistedReducer,
    middleware: function (getDefaultMiddleware) { return __spreadArrays(getDefaultMiddleware()); },
    devTools: true
});
//create persist store
var persistor = redux_persist_1.persistStore(store);
exports["default"] = { store: store, persistor: persistor };
