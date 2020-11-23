import { getPublicKey, parse } from './helper';
import { Algorithm } from 'jsonwebtoken';

export default function jwtParse(token: string, envVariables: any, service: string, algorithm: Algorithm[]) {
  return parse(token, envVariables, service, algorithm);
}
