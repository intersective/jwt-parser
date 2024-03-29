import jwt, { Algorithm } from 'jsonwebtoken';

export function getPublicKey(envVariables: any, service = 'DEFAULT') {
  const serviceJWT = `${ service }_JWT`;
  if (typeof envVariables[serviceJWT] === 'undefined') {
    throw Error(`Service ${service} not defined`);
  }
  try {
    return JSON.parse(envVariables[serviceJWT]).public;
  } catch (e) {
    throw Error('Invalid JWT public key');
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
      if (envVariables.ENV &&
        envVariables.CHECK_JWT_EXPIRY === 'true' && // for the time being, allow exception
        ['live', 'prod', 'production'].includes(envVariables.ENV.toLowerCase()) &&
        !payload.exp) {
        throw new Error("jwt token doesn't have expire time");
      }
      contents = payload;
    },
  );
  return contents;
}
