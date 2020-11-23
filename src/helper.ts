import jwt, { Algorithm } from 'jsonwebtoken';

export function getPublicKey(envVariables: any, service = 'DEFAULT') {
  const serviceJWT = `${ service }_JWT`;
  if (typeof envVariables[serviceJWT] === 'undefined') {
    throw Error(`service ${serviceJWT} not defined`);
  }
  try {
    return JSON.parse(envVariables[serviceJWT]).public;
  } catch (e) {
    throw Error('invalid public key');
  }
}

export function parse(token: string, envVariables: any, service: string, algorithm: Algorithm[] = ['RS256']) {
  let contents: any = [];
  jwt.verify(
    token,
    getPublicKey(envVariables, service),
    { algorithms: algorithm },
    (err: any, payload: any) => {
      if (err) {
        throw err;
      }
      contents = payload;
    },
  );
  return contents;
}