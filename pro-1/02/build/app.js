"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _DB = _interopRequireDefault(require("./boot/DB"));

var _routes = _interopRequireDefault(require("./app/routes"));

var _morgan = _interopRequireDefault(require("morgan"));

_DB["default"].Connect();

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use("/api", _routes["default"].Public);
app.use("/auth", _routes["default"].Private);
var _default = app;
exports["default"] = _default;