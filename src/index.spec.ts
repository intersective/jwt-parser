import jwtParser from '../lib';

let res: any;

afterEach(() => {
  expect(res).toMatchSnapshot();
});

it('1. it should return the correct values', function() {
  const token = 'ewoJInR5cGUiOiAiSldUIiwKCSJhbGciOiAiUlMyNTYiCn0.' +
    'ewogICJjb250ZW50cyI6ICJjb250ZW50cyBvZiB0aGUgSldUIgp9.' +
    'jzou9_ga85x28objtX3poBGHOQ_KgIDFDmMw0NqLDjwbNHW-2bx8P' +
    'apVlpoRk_l5J3sd7iiZRJDfXG1fl8UmMaMaMW7zaqu6SsneaedDIH' +
    'EmaKIM032hj-egzfsQqy1l8hoHZbc5SM2NATNrfTjP0uAvOBAljkq' +
    'v9-5N8B4k8urDCnqcKmgNbUWyumEe5_KpmQSv-Xw5Eu05ejCZR6Ir' +
    'sb_ShjChdrQjX57DPeoD70k4Qy6FAsUszrfcqc81upmYSD7E2kbqv' +
    '_wK2DIr3E4yBuJUBBCVUN2_Wy8KM-xhPMBx4TiKwdan7WIKxRzBF-' +
    'PkblOnezUVSs-efqxHxuvXlg';
  const envVariables = {
    TEST_JWT: JSON.stringify({public: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwCtQ1cAYp7tNiA0SojsVgiO9DwsLhs5Z\n' +
    'OEkKa72RFPBUS7fDBA2cZqJha+7ZtDnQRThIaGHnXbZSABIffAB67+jBB1sg/ublYf4mvT8qXUj2\n' +
    'MUs6ft7jBarIeXAo8xFC7Bdbj0GRGUsTD74ZT9R/XF3t1qYomqu9PCeRK3BwEykAVogFQ5z2D3Ki\n' +
    'McKPw+YmdPpzoj643fK/UrWzAVwUPTWDeLvj3JIVrYKkkbiDO2oqZzVFuZ0qBbe+9aWQW4QqAavS\n' +
    'AIxWszr9Wn0LontOwZ0oUBl7TiPvCb1mqMzsq4R8ghWVG/CxH4n/p2ktGwxvs+e6JGHCpCohq6SA\n' +
    'CU7R9wIDAQAB\n' +
    '-----END PUBLIC KEY-----'}),
  };
  // sign with RSA SHA256
  res = jwtParser(token, envVariables, 'TEST', ['RS256']);
});