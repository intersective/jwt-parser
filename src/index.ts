import { parse } from './helper';
import { Algorithm } from 'jsonwebtoken';

export = function jwtParse(token: string, envVariables: any, service: string, algorithm?: Algorithm[]) {
  return parse(token, envVariables, service, algorithm);
}
