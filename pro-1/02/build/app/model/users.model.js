"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var UserSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    require: true
  },
  uname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  pwd: {
    type: String,
    require: true
  },
  level: {
    type: String,
    require: true
  },
  recent: {
    type: Array,
    require: true
  },
  cart: {
    type: Array,
    require: true
  },
  bought: {
    type: Array,
    require: true
  }
});
var User = (0, _mongoose.model)('Users', UserSchema);
var _default = User;
exports["default"] = _default;