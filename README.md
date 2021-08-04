# @practera/jwt-parser

Validates a JWT with a public key, parses the token and returns the contents.

## Install

```
$ npm install @practera/jwt-parser
```

## Usage

### Development Notes

1. `exp` object must present in JWT payload when `CHECK_JWT_EXPIRY` is enabled (by setting 'true' in string)

1. To find out JWT what content available in JWT payload, you can:
  1. Use [jwt.io](https://jwt.io/)
  1. in node environment run `JWT.verify(APIKEY, PUBLIC_KEY, ALGORITHM, CALLBACK);`
    ```javascript
      // example
      const JWT = require('jsonwebtoken');
      JWT.verify(
        // APIKEY
        'ewoJInR5cGUiOiAiSldUIiwKCSJhbGciOiAiUlMyNTYiCn0.' +
        'ewogICJjb250ZW50cyI6ICJjb250ZW50cyBvZiB0aGUgSldUIgp9.' +
        'jzou9_ga85x28objtX3poBGHOQ_KgIDFDmMw0NqLDjwbNHW-2bx8P' +
        'apVlpoRk_l5J3sd7iiZRJDfXG1fl8UmMaMaMW7zaqu6SsneaedDIH' +
        'EmaKIM032hj-egzfsQqy1l8hoHZbc5SM2NATNrfTjP0uAvOBAljkq' +
        'v9-5N8B4k8urDCnqcKmgNbUWyumEe5_KpmQSv-Xw5Eu05ejCZR6Ir' +
        'sb_ShjChdrQjX57DPeoD70k4Qy6FAsUszrfcqc81upmYSD7E2kbqv' +
        '_wK2DIr3E4yBuJUBBCVUN2_Wy8KM-xhPMBx4TiKwdan7WIKxRzBF-' +
        'PkblOnezUVSs-efqxHxuvXlg',

        // public key
        '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwCtQ1cAYp7tNiA0SojsVgiO9DwsLhs5Z\n' +
        'OEkKa72RFPBUS7fDBA2cZqJha+7ZtDnQRThIaGHnXbZSABIffAB67+jBB1sg/ublYf4mvT8qXUj2\n' +
        'MUs6ft7jBarIeXAo8xFC7Bdbj0GRGUsTD74ZT9R/XF3t1qYomqu9PCeRK3BwEykAVogFQ5z2D3Ki\n' +
        'McKPw+YmdPpzoj643fK/UrWzAVwUPTWDeLvj3JIVrYKkkbiDO2oqZzVFuZ0qBbe+9aWQW4QqAavS\n' +
        'AIxWszr9Wn0LontOwZ0oUBl7TiPvCb1mqMzsq4R8ghWVG/CxH4n/p2ktGwxvs+e6JGHCpCohq6SA\n' +
        'CU7R9wIDAQAB\n' +
        '-----END PUBLIC KEY-----',

        { algorithms: ['RS256'] },
        (err, payload) => {
          if (err) throw err;
          console.log(payload); // result: { contents: 'contents of the JWT' }
        }
      );
    ```


### Parameters

`CHECK_JWT_EXPIRY` - will invalidate a JWT when the expiry timestamp (in seconds) isn't provided.

### How to use?

JavaScript:
```js
const jwtParse = require("@practera/jwt-parser");

jwtContents = jwtParse(
  token, // the token to be verified and parsed
  process.env, // environmental variables or another array of tokens that are accepted
  service, // this will identify what public key to use to validate the token, the variable called ${service}_JWT will be used. The variable should contain a key called public and the public key as the value.
  ['RS256'], // list of algorithms that will be used to validate the token. Default: ['RS256']
);
```

TypeScript:
```js
import jwtParse from "@practera/jwt-parser";

jwtContents = jwtParse(
  token, // the token to be verified and parsed
  process.env, // environmental variables or another array of tokens that are accepted
  service, // this will identify what public key to use to validate the token, the variable called ${service}_JWT will be used. The variable should contain a key called public and the public key as the value.
  ['RS256'], // list of algorithms that will be used to validate the token. Default: ['RS256']
);
```
