"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _users = _interopRequireDefault(require("../model/users.model"));

var _Keys = _interopRequireDefault(require("../../boot/Keys"));

var UsersServices =
/*#__PURE__*/
function () {
  function UsersServices() {
    (0, _classCallCheck2["default"])(this, UsersServices);
  }

  (0, _createClass2["default"])(UsersServices, null, [{
    key: "Regester",
    value: function () {
      var _Regester = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(user) {
        var name, uname, email, pwd, level, recent, cart, bought, salt, _hash, query, regUser;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                name = user.name, uname = user.uname, email = user.email, pwd = user.pwd, level = user.level, recent = user.recent, cart = user.cart, bought = user.bought;
                _context.next = 4;
                return _bcryptjs["default"].genSalt(10);

              case 4:
                salt = _context.sent;
                _context.next = 7;
                return _bcryptjs["default"].hash(pwd, salt);

              case 7:
                _hash = _context.sent;
                query = {
                  name: name,
                  uname: uname,
                  email: email,
                  pwd: _hash,
                  level: level,
                  recent: recent,
                  cart: cart,
                  bought: bought
                };
                _context.next = 11;
                return _users["default"].create(query);

              case 11:
                regUser = _context.sent;
                return _context.abrupt("return", regUser);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      function Regester(_x) {
        return _Regester.apply(this, arguments);
      }

      return Regester;
    }()
  }, {
    key: "Login",
    value: function () {
      var _Login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(user) {
        var uname, pwd, userCheck, res, newwUser, tokent;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                uname = user.uname, pwd = user.pwd;
                _context2.next = 4;
                return _users["default"].findOne({
                  uname: uname
                });

              case 4:
                userCheck = _context2.sent;

                if (!(userCheck === null)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", "user not found");

              case 9:
                _context2.next = 11;
                return _bcryptjs["default"].compare(pwd, hash);

              case 11:
                res = _context2.sent;

                if (res) {
                  _context2.next = 16;
                  break;
                }

                return _context2.abrupt("return", "User name or password dosent match");

              case 16:
                _context2.next = 18;
                return _users["default"].findOne({
                  uname: uname
                }).select("-pwd");

              case 18:
                newwUser = _context2.sent;
                _context2.next = 21;
                return _jsonwebtoken["default"].sign({
                  user: newwUser
                }, _Keys["default"].PrivateKey(), {
                  algorithm: 'RS256',
                  expiresIn: '1h'
                });

              case 21:
                tokent = _context2.sent;
                return _context2.abrupt("return", tokent);

              case 23:
                _context2.next = 28;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 25]]);
      }));

      function Login(_x2) {
        return _Login.apply(this, arguments);
      }

      return Login;
    }()
  }]);
  return UsersServices;
}();

var _default = UsersServices;
exports["default"] = _default;