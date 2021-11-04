"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
exports.userSlice = exports.signIn = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = require("axios");
axios_1["default"].defaults.headers['x-icode'] = 'BF575F644E468D19';
var initialState = {
    loading: false,
    error: null,
    token: null
};
exports.signIn = toolkit_1.createAsyncThunk("user/signIn", function (parameters, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].post("http://123.56.149.216:8080/auth/login", {
                    email: parameters.email,
                    password: parameters.password
                })];
            case 1:
                data = (_a.sent()).data;
                console.log("data in user/slice : " + data.token);
                return [2 /*return*/, data.token];
        }
    });
}); });
exports.userSlice = toolkit_1.createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logOut: function (state) {
            state.token = null;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: (_a = {},
        _a[exports.signIn.pending.type] = function (state) {
            state.loading = true;
        },
        _a[exports.signIn.fulfilled.type] = function (state, action) {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        _a[exports.signIn.rejected.type] = function (state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        _a)
});
