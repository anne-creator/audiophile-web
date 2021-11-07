"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
require("antd/dist/antd.css");
var react_redux_1 = require("react-redux");
var store_1 = require("./redux/store"); //the combination of persistor(persist store) & the real store
var react_2 = require("redux-persist/integration/react"); // provider from redux-persist only for react
var antd_1 = require("antd");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"].store },
        react_1["default"].createElement(react_2.PersistGate, { persistor: store_1["default"].persistor, loading: antd_1.Spin },
            react_1["default"].createElement(App_1["default"], null)))), document.getElementById('root'));
