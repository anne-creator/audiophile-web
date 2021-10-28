"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var Header_module_scss_1 = require("./Header.module.scss");
var logo_png_1 = require("../../assets/logo.png");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
exports.Header = function () {
    var _a = react_1.useState(false), showLinks = _a[0], setShowLinks = _a[1];
    // const history = useHistory();
    return (react_1["default"].createElement("div", { className: Header_module_scss_1["default"]["app-header"] },
        react_1["default"].createElement("div", { className: Header_module_scss_1["default"]["header"] },
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['logo-container'] },
                react_1["default"].createElement("img", { src: logo_png_1["default"], alt: "logo" })),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['nav'] },
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['nav__category'] },
                    react_1["default"].createElement(icons_1.MenuOutlined, { className: Header_module_scss_1["default"]['nav__button'], style: { fontSize: '16px', color: '#fff' }, onClick: function () { return setShowLinks(!showLinks); } })),
                react_1["default"].createElement("ul", { className: Header_module_scss_1["default"]["nav__items"] },
                    react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "HOME"),
                    react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "HEADPHONES"),
                    react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "SPEAKERS"),
                    react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "EARPHONES"))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['header__right'] },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "signIn" },
                        react_1["default"].createElement(antd_1.Button, { type: 'primary', className: Header_module_scss_1["default"]['button__login'] }, "Sign In")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "register" },
                        react_1["default"].createElement(antd_1.Button, { className: Header_module_scss_1["default"]['button__signup'] }, "Register"))))),
        showLinks ?
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"][showLinks ? 'hidden' : ''] },
                    react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['item'] }, "HOME"),
                    react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['item'] }, "HEADPHONES"),
                    react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['item'] }, "SPEAKERS"),
                    react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['item'] }, "EARPHONES"),
                    react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['item'] },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "signIn" },
                            react_1["default"].createElement(antd_1.Button, { type: 'primary', className: Header_module_scss_1["default"]['button__login'] }, "Sign In"))),
                    react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['item'] },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "register" },
                            react_1["default"].createElement(antd_1.Button, { className: Header_module_scss_1["default"]['button__signup'] }, "Register")))))
            : null));
};
