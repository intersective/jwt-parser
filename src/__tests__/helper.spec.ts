import { getPublicKey, parse } from '../helper';

let res: any;

afterEach(() => {
  expect(res).toMatchSnapshot();
});

describe('1. getPublicKey tests', () => {
  describe('1.1 when the service is not defined it should return the DEFAULT key', () => {
    it('1.1.1 The DEFAULT key was returned', () => {
      res = getPublicKey({
        DEFAULT_JWT: JSON.stringify({ public: 'default key' }),
      },                 undefined);
    });
  });
  describe('1.2 when the service is defined it should return that key', () => {
    it('1.2.1 The PRACTERA key was returned', () => {
      res = getPublicKey({
        PRACTERA_JWT: JSON.stringify({ public: 'a key' }),
      },                 'PRACTERA');
    });
  });
  describe('1.3 when the service does not match anything in the environmental variables', () => {
    it('1.3.1 it should throw an error because UNKNOWN is not defined', () => {
      try {
        getPublicKey({
          DEFAULT_JWT: JSON.stringify({ public: 'default key again' }),
        },           'UNKNOWN');
      } catch (e) {
        res = e;
      }
    });
  });

  describe('1.4 when the service is correct, the variable exists but its contents are incorrect', () => {
    it('1.4.1 it should throw an error because the public key is invalid', () => {
      try {
        getPublicKey({
          BAD_JWT: 'default key again',
        },           'BAD');
      } catch (e) {
        res = e;
      }
    });
  });
});

describe('2. parse tests', () => {
  describe('2.1 test parse when service is PRACTERA', () => {
    it('2.1.1 it should return the correct values', () => {
      try {
        parse(
          '11111ewoJInR5cGUiOiAiSldUIiwKCSJhbGciOiAiUlMyNTYiCn0.' +
          'ewogICJjb250ZW50cyI6ICJjb250ZW50cyBvZiB0aGUgSldUIgp9.' +
          'jzou9_ga85x28objtX3poBGHOQ_KgIDFDmMw0NqLDjwbNHW-2bx8P' +
          'apVlpoRk_l5J3sd7iiZRJDfXG1fl8UmMaMaMW7zaqu6SsneaedDIH' +
          'EmaKIM032hj-egzfsQqy1l8hoHZbc5SM2NATNrfTjP0uAvOBAljkq' +
          'v9-5N8B4k8urDCnqcKmgNbUWyumEe5_KpmQSv-Xw5Eu05ejCZR6Ir' +
          'sb_ShjChdrQjX57DPeoD70k4Qy6FAsUszrfcqc81upmYSD7E2kbqv' +
          '_wK2DIr3E4yBuJUBBCVUN2_Wy8KM-xhPMBx4TiKwdan7WIKxRzBF-' +
          'PkblOnezUVSs-efqxHxuvXlg',
          {
            TEST_JWT: JSON.stringify({public: '-----BEGIN PUBLIC KEY-----\n' +
            'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwCtQ1cAYp7tNiA0SojsVgiO9DwsLhs5Z\n' +
            'OEkKa72RFPBUS7fDBA2cZqJha+7ZtDnQRThIaGHnXbZSABIffAB67+jBB1sg/ublYf4mvT8qXUj2\n' +
            'MUs6ft7jBarIeXAo8xFC7Bdbj0GRGUsTD74ZT9R/XF3t1qYomqu9PCeRK3BwEykAVogFQ5z2D3Ki\n' +
            'McKPw+YmdPpzoj643fK/UrWzAVwUPTWDeLvj3JIVrYKkkbiDO2oqZzVFuZ0qBbe+9aWQW4QqAavS\n' +
            'AIxWszr9Wn0LontOwZ0oUBl7TiPvCb1mqMzsq4R8ghWVG/CxH4n/p2ktGwxvs+e6JGHCpCohq6SA\n' +
            'CU7R9wIDAQAB\n' +
            '-----END PUBLIC KEY-----'}),
          },
          'TEST',
          ['RS256'],
        );
      } catch (e) {
        res = e;
      }
    });
  });

  describe('2.2 test parse when service is PRACTERA', () => {
    it('2.2.1 it should return the correct values', () => {
      try {
        parse(
          'ewoJInR5cGUiOiAiSldUIiwKCSJhbGciOiAiUlMyNTYiCn0' +
          '.ewogICJjb250ZW50cyI6ICJjb250ZW50cyBvZiB0aGUgSldUIgp9.' +
          'jzou9_ga85x28objtX3poBGHOQ_KgIDFDmMw0NqLDjwbNHW-2bx8PapVlpo' +
          'Rk_l5J3sd7iiZRJDfXG1fl8UmMaMaMW7zaqu6SsneaedDIHEmaKIM032hj-egz' +
          'fsQqy1l8hoHZbc5SM2NATNrfTjP0uAvOBAljkqv9-5N8B4k8urDCnqcKmgNbUWyum' +
          'Ee5_KpmQSv-Xw5Eu05ejCZR6Irsb_ShjChdrQjX57DPeoD70k4Qy6FAsUszrfcqc8' +
          '1upmYSD7E2kbqv_wK2DIr3E4yBuJUBBCVUN2_Wy8KM-xhPMBx4TiKwdan7WIKxRzBF-PkblOnezUVSs-efqxHxuvXlg',
          {
            TEST_JWT: JSON.stringify({public: '-----BEGIN PUBLIC KEY-----\n' +
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCM+6lJbchVCq3rmu1rfw8nEUpr\n' +
            '7tPg5TGN4P0he0Clb5EkZB2rzOMGSIXMbEJLhvm+c5e42+iI1h7RjJsSKwEcA5Xx\n' +
            'dXmqSiR0ThzCOR177VgmPAasLU0S+oIS7KACzGIqRZWs+BAUKkwN2sqQ5GuTptSu\n' +
            'KcVJUN8w0Wnq79ROyQIDAQAB\n' +
            '-----END PUBLIC KEY-----'}),
          },
          'TEST',
          ['RS256'],
        );
      } catch (e) {
        res = e;
      }
    });
  });

  describe('2.3 test parse when service is PRACTERA', () => {
    it('2.3.1 it should return the correct values', () => {
      try {
        parse(
          'wow',
          {
            TEST_JWT: JSON.stringify({public: '-----BEGIN PUBLIC KEY-----' +
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCM+6lJbchVCq3rmu1rfw8nEUpr' +
            '7tPg5TGN4P0he0Clb5EkZB2rzOMGSIXMbEJLhvm+c5e42+iI1h7RjJsSKwEcA5Xx' +
            'dXmqSiR0ThzCOR177VgmPAasLU0S+oIS7KACzGIqRZWs+BAUKkwN2sqQ5GuTptSu' +
            'KcVJUN8w0Wnq79ROyQIDAQAB\n-----END PUBLIC KEY-----'}),
          },
          'TEST',
          ['RS256'],
        );
      } catch (e) {
        res = e;
      }
    });
  });

  describe('2.4 test parse when service is PRACTERA', () => {
    it('2.4.1 it should return the correct values', () => {
      // sign with RSA SHA256
      res =  parse(
        'ewoJInR5cGUiOiAiSldUIiwKCSJhbGciOiAiUlMyNTYiCn0.' +
        'ewogICJjb250ZW50cyI6ICJjb250ZW50cyBvZiB0aGUgSldUIgp9.' +
        'jzou9_ga85x28objtX3poBGHOQ_KgIDFDmMw0NqLDjwbNHW-2bx8P' +
        'apVlpoRk_l5J3sd7iiZRJDfXG1fl8UmMaMaMW7zaqu6SsneaedDIH' +
        'EmaKIM032hj-egzfsQqy1l8hoHZbc5SM2NATNrfTjP0uAvOBAljkq' +
        'v9-5N8B4k8urDCnqcKmgNbUWyumEe5_KpmQSv-Xw5Eu05ejCZR6Ir' +
        'sb_ShjChdrQjX57DPeoD70k4Qy6FAsUszrfcqc81upmYSD7E2kbqv' +
        '_wK2DIr3E4yBuJUBBCVUN2_Wy8KM-xhPMBx4TiKwdan7WIKxRzBF-' +
        'PkblOnezUVSs-efqxHxuvXlg',
        {
          TEST_JWT: JSON.stringify({public: '-----BEGIN PUBLIC KEY-----\n' +
          'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwCtQ1cAYp7tNiA0SojsVgiO9DwsLhs5Z\n' +
          'OEkKa72RFPBUS7fDBA2cZqJha+7ZtDnQRThIaGHnXbZSABIffAB67+jBB1sg/ublYf4mvT8qXUj2\n' +
          'MUs6ft7jBarIeXAo8xFC7Bdbj0GRGUsTD74ZT9R/XF3t1qYomqu9PCeRK3BwEykAVogFQ5z2D3Ki\n' +
          'McKPw+YmdPpzoj643fK/UrWzAVwUPTWDeLvj3JIVrYKkkbiDO2oqZzVFuZ0qBbe+9aWQW4QqAavS\n' +
          'AIxWszr9Wn0LontOwZ0oUBl7TiPvCb1mqMzsq4R8ghWVG/CxH4n/p2ktGwxvs+e6JGHCpCohq6SA\n' +
          'CU7R9wIDAQAB\n' +
          '-----END PUBLIC KEY-----'}),
        },
        'TEST',
        ['RS256'],
      );
    });
  });
  describe('2.5 test parse when service is PRACTERA', () => {
    it('2.5.1 it should return the correct values', () => {
      // sign with RSA SHA256
      res =  parse(
        'ewoJInR5cGUiOiAiSldUIiwKCSJhbGciOiAiUlMyNTYiCn0.' +
        'ewogICJjb250ZW50cyI6ICJjb250ZW50cyBvZiB0aGUgSldUIgp9.' +
        'jzou9_ga85x28objtX3poBGHOQ_KgIDFDmMw0NqLDjwbNHW-2bx8P' +
        'apVlpoRk_l5J3sd7iiZRJDfXG1fl8UmMaMaMW7zaqu6SsneaedDIH' +
        'EmaKIM032hj-egzfsQqy1l8hoHZbc5SM2NATNrfTjP0uAvOBAljkq' +
        'v9-5N8B4k8urDCnqcKmgNbUWyumEe5_KpmQSv-Xw5Eu05ejCZR6Ir' +
        'sb_ShjChdrQjX57DPeoD70k4Qy6FAsUszrfcqc81upmYSD7E2kbqv' +
        '_wK2DIr3E4yBuJUBBCVUN2_Wy8KM-xhPMBx4TiKwdan7WIKxRzBF-' +
        'PkblOnezUVSs-efqxHxuvXlg',
        {
          TEST_JWT: JSON.stringify({public: '-----BEGIN PUBLIC KEY-----\n' +
          'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwCtQ1cAYp7tNiA0SojsVgiO9DwsLhs5Z\n' +
          'OEkKa72RFPBUS7fDBA2cZqJha+7ZtDnQRThIaGHnXbZSABIffAB67+jBB1sg/ublYf4mvT8qXUj2\n' +
          'MUs6ft7jBarIeXAo8xFC7Bdbj0GRGUsTD74ZT9R/XF3t1qYomqu9PCeRK3BwEykAVogFQ5z2D3Ki\n' +
          'McKPw+YmdPpzoj643fK/UrWzAVwUPTWDeLvj3JIVrYKkkbiDO2oqZzVFuZ0qBbe+9aWQW4QqAavS\n' +
          'AIxWszr9Wn0LontOwZ0oUBl7TiPvCb1mqMzsq4R8ghWVG/CxH4n/p2ktGwxvs+e6JGHCpCohq6SA\n' +
          'CU7R9wIDAQAB\n' +
          '-----END PUBLIC KEY-----'}),
        },
        'TEST',
      );
    });
  });
});
