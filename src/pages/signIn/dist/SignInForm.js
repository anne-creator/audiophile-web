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
exports.SignInForm = void 0;
var SignInForm_module_scss_1 = require("./SignInForm.module.scss");
var antd_1 = require("antd");
var slice_1 = require("../../redux/user/slice");
var react_redux_1 = require("react-redux");
var hooks_1 = require("../../redux/hooks");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
var tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};
exports.SignInForm = function () {
    var loading = hooks_1.useSelector(function (s) { return s.user.loading; });
    var error = hooks_1.useSelector(function (s) { return s.user.error; });
    var jwt = hooks_1.useSelector(function (s) { return s.user.token; });
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
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
    return (React.createElement(antd_1.Form, __assign({}, layout, { name: "basic", initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, className: SignInForm_module_scss_1["default"]["register-form"] }),
        React.createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: "Please input your username!" }] },
            React.createElement(antd_1.Input, null)),
        React.createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: "Please input your password!" }] },
            React.createElement(antd_1.Input.Password, null)),
        React.createElement(antd_1.Form.Item, __assign({}, tailLayout, { name: "remember", valuePropName: "checked" }),
            React.createElement(antd_1.Checkbox, null, "Remember me")),
        React.createElement(antd_1.Form.Item, __assign({}, tailLayout),
            React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", loading: loading }, "Submit"))));
};
