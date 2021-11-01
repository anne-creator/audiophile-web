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
var rootReducer = toolkit_1.combineReducers({
    categoreis: slice_1.categoriesSlice.reducer,
    productPromote: slice_2.productPromoteSlice.reducer,
    productItem: slice_3.productItemSlice.reducer
});
var store = toolkit_1.configureStore({
    reducer: rootReducer,
    middleware: function (getDefaultMiddleware) { return __spreadArrays(getDefaultMiddleware()); },
    devTools: true
});
exports["default"] = store;
