"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Keys =
/*#__PURE__*/
function () {
  function Keys() {
    (0, _classCallCheck2["default"])(this, Keys);
  }

  (0, _createClass2["default"])(Keys, null, [{
    key: "mongodbURI",
    value: function mongodbURI() {
      return "mongodb://localhost/serve-it";
    }
  }, {
    key: "PrivateKey",
    value: function PrivateKey() {
      return "this is my damn private";
    }
  }]);
  return Keys;
}();

var _default = Keys;
exports["default"] = _default;