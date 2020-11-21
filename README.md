# @practera/jwt-parser

Validates a JWT with a public key, parses the token and returns the contents.

## Install

```
$ npm install @practera/jwt-parser
```

## Usage

```js
const jwtParser = require("@practera/jwt-parser");

jwtContents = jwtParser.parse(
  token, // the token to be verified and parsed
  process.env, // environmental variables or another array of tokens that are accepted
  service, // this will identify what public key to use to validate the token, the variable called ${service}_JWT will be used.
  ['RS256'], // list of algorithms that will be used to validate the token.
);
```