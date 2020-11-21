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
  token,
  process.env,
  service, // this will identify what public key to use to validate the token
  ['RS256'],
);
```