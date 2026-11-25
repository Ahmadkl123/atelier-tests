const { genererToken, classer } = require('../../src/utils');

describe('utils', () => {
  test('genererToken retourne une chaîne hexadécimale non vide de longueur attendue', () => {
    const token1 = genererToken();
    const token2 = genererToken(16);

    expect(typeof token1).toBe('string');
    expect(token1.length).toBe(32);
    expect(/^[0-9a-f]+$/i.test(token1)).toBe(true);
    expect(token2.length).toBe(32);
    expect(token1).not.toBe(token2);
  });

  test('classer retourne parfait uniquement pour 20', () => {
    expect(classer(20)).toBe('parfait');
    expect(classer('20')).toBe('refusé');
  });

  test('classer retourne admis entre 10 et 19.99', () => {
    expect(classer(10)).toBe('admis');
    expect(classer(15.5)).toBe('admis');
    expect(classer(19.99)).toBe('admis');
  });

  test('classer retourne refusé sous 10 ou pour une valeur invalide', () => {
    expect(classer(9.99)).toBe('refusé');
    expect(classer(0)).toBe('refusé');
    expect(classer(NaN)).toBe('refusé');
  });
});