"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SignInPage = void 0;
var react_1 = require("react");
var SignInPage_module_scss_1 = require("./SignInPage.module.scss");
var antd_1 = require("antd");
var slice_1 = require("../../redux/user/slice");
var userLayout_1 = require("../../layouts/userLayout");
var react_redux_1 = require("react-redux");
var hooks_1 = require("../../redux/hooks");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
var tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};
exports.SignInPage = function (props) {
    var loading = hooks_1.useSelector(function (s) { return s.user.loading; });
    // eslint-disable-next-line
    var error = hooks_1.useSelector(function (s) { return s.user.error; });
    var jwt = hooks_1.useSelector(function (s) { return s.user.token; });
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    react_2.useEffect(function () {
        if (jwt != null) {
            history.push('/');
        }
    });
    var onFinish = function (values) {
        dispatch(slice_1.signIn({
            email: values.username,
            password: values.password
        }));
    };
    var onFinishFailed = function (errorInfo) {
        console.log("Failed:", errorInfo);
    };
    return (react_1["default"].createElement(userLayout_1.UserLayout, null,
        react_1["default"].createElement("h1", { className: SignInPage_module_scss_1["default"]['Signin__title'] }, "Sign In"),
        react_1["default"].createElement("div", { className: SignInPage_module_scss_1["default"]['signin__container'] },
            react_1["default"].createElement(antd_1.Form, __assign({}, layout, { name: "basic", initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, className: SignInPage_module_scss_1["default"]["register-form"] }),
                react_1["default"].createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: "Please input your username!" }] },
                    react_1["default"].createElement(antd_1.Input, null)),
                react_1["default"].createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: "Please input your password!" }] },
                    react_1["default"].createElement(antd_1.Input.Password, null)),
                react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailLayout),
                    react_1["default"].createElement(antd_1.Button, { className: SignInPage_module_scss_1["default"]['button-primary'], type: "primary", htmlType: "submit", loading: loading }, "Submit"))),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/register" },
                react_1["default"].createElement("p", { className: SignInPage_module_scss_1["default"]['Signin__go-register'] }, "Don't have an account yet, Go register")))));
};
