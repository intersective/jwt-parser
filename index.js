'use strict';
const jwtParser = require('./helper');

module.exports = function jwtParse(token, envVariables, service, algorithm) {
  return jwtParser.parse(token, envVariables, service, algorithm);
};

