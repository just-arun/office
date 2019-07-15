"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongoose = require("mongoose");

var _Keys = _interopRequireDefault(require("./Keys"));

var DataBase =
/*#__PURE__*/
function () {
  function DataBase() {
    (0, _classCallCheck2["default"])(this, DataBase);
  }

  (0, _createClass2["default"])(DataBase, null, [{
    key: "Connect",
    value: function Connect() {
      var mongooseOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoReconnect: true
      };
      (0, _mongoose.connect)(_Keys["default"].mongodbURI(), mongooseOptions).then(function () {
        return console.log("connected to db...");
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }]);
  return DataBase;
}();

var _default = DataBase;
exports["default"] = _default;