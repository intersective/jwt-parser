![SonarCloud CI - Develop Branch](https://github.com/intersective/jwt-parser/workflows/SonarCloud%20CI%20-%20Develop%20Branch/badge.svg) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=intersective_jwt-parser&metric=alert_status&token=60f7eba32710225786f21cd7d54e5e6746f97476)](https://sonarcloud.io/dashboard?id=intersective_jwt-parser) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=intersective_jwt-parser&metric=coverage&token=60f7eba32710225786f21cd7d54e5e6746f97476)](https://sonarcloud.io/dashboard?id=intersective_jwt-parser)



# @practera/jwt-parser

Validates a JWT with a public key, parses the token and returns the contents.

## Install

```
$ npm install @practera/jwt-parser
```

## Usage

### Notes
`exp` object must present in JWT payload when `CHECK_JWT_EXPIRY` is enabled (by setting 'true' in string)

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
