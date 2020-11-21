'use strict';
const JWT = require('jsonwebtoken');

module.exports = {
  getPublicKey(envVariables, service) {
    if (service === undefined) {
      service = 'DEFAULT';
    }
    const serviceJWT = service + '_JWT';
    if (typeof envVariables[serviceJWT] === 'undefined') {
      throw Error(`service ${serviceJWT} not defined`);
    }
    try {
      return JSON.parse(envVariables[serviceJWT]).public;
    } catch (e) {
      throw Error('invalid public key');
    }
  },

  parse(token, envVariables, service, algorithm) {
    let contents = [];
    if (algorithm === undefined) {
      algorithm = ['RS256'];
    }
    JWT.verify(
      token,
      this.getPublicKey(envVariables, service),
      { algorithms: algorithm },
      (err, payload) => {
        if (err) {
          throw err;
        }
        contents = payload;
      },
    );
    return contents;
  },
};
