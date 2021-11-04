"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var Header_module_scss_1 = require("./Header.module.scss");
var logo_png_1 = require("../../assets/logo.png");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../redux/hooks");
var jwt_decode_1 = require("jwt-decode");
var slice_1 = require("../../redux/user/slice");
var react_redux_1 = require("react-redux");
var react_router_dom_2 = require("react-router-dom");
exports.Header = function () {
    var _a = react_1.useState(false), showLinks = _a[0], setShowLinks = _a[1];
    var _b = react_1.useState(""), username = _b[0], setUsername = _b[1];
    var jwt = hooks_1.useSelector(function (s) { return s.user.token; });
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_2.useHistory();
    react_1.useEffect(function () {
        if (jwt) {
            var token = jwt_decode_1["default"](jwt);
            setUsername(token.username);
        }
    }, [jwt]);
    var onLogout = function () {
        dispatch(slice_1.userSlice.actions.logOut());
        history.push("/");
    };
    return (react_1["default"].createElement("div", { className: Header_module_scss_1["default"]["app-header"] },
        react_1["default"].createElement("div", { className: Header_module_scss_1["default"]["header"] },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/' },
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['logo-container'] },
                    react_1["default"].createElement("img", { src: logo_png_1["default"], alt: "logo" }))),
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['nav'] },
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['nav__category'] },
                    react_1["default"].createElement(icons_1.MenuOutlined, { className: Header_module_scss_1["default"]['nav__button'], style: { fontSize: '16px', color: '#fff' }, onClick: function () { return setShowLinks(!showLinks); } })),
                react_1["default"].createElement("ul", { className: Header_module_scss_1["default"]["nav__items"] },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "HOME")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/1' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "HEADPHONES")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/2' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "SPEAKERS")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/3' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "EARPHONES")))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['header__right'] }, jwt ? (react_1["default"].createElement(antd_1.Button.Group, { className: Header_module_scss_1["default"]["button-group"] },
                    react_1["default"].createElement("span", null,
                        "Welcome,",
                        react_1["default"].createElement("h1", null, username)),
                    react_1["default"].createElement(antd_1.Button, { onClick: onLogout }, "Sign Out")))
                    : (react_1["default"].createElement(antd_1.Button.Group, { className: Header_module_scss_1["default"]["button-group"] },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "signIn" },
                            react_1["default"].createElement(antd_1.Button, { type: 'primary', className: Header_module_scss_1["default"]['button__login'] }, "Sign In")),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "register" },
                            react_1["default"].createElement(antd_1.Button, { className: Header_module_scss_1["default"]['button__signup'] }, "Register"))))))),
        showLinks ?
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("ul", { className: Header_module_scss_1["default"][showLinks ? 'hidden' : ''] },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "HOME")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/1' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "HEADPHONES")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/1' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "SPEAKERS")),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/categories/1' },
                        react_1["default"].createElement("li", { className: Header_module_scss_1["default"]['item'] }, "EARPHONES")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "signIn" },
                            react_1["default"].createElement(antd_1.Button, { type: 'primary', className: Header_module_scss_1["default"]['button__login'] }, "Sign In"))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "register" },
                            react_1["default"].createElement(antd_1.Button, { className: Header_module_scss_1["default"]['button__signup'] }, "Register")))))
            : null));
};
