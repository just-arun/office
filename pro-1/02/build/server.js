"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

/**
 * Module dependencies.
 */
var debug = require('debug')('1:server');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? "Pipe ".concat(port) : "Port ".concat(port); // 	// handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      console.error("".concat(bind, " requires elevated privileges"));
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error("".concat(bind, " is already in use"));
      process.exit(1);
      break;

    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(addr.port);
  debug("Listening on ".concat(bind));
}

var port = normalizePort(process.env.PORT || '3000');

_app["default"].set('port', port);

_app["default"].listen(port);

_app["default"].on('error', onError);

_app["default"].on('listening', onListening);