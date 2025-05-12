const add = import('../../src/add');

describe('Fonction add', () => {
    test('devrait additionner deux nombres positifs', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('devrait gérer les nombres négatifs', () => {
        expect(add(-1, -2)).toBe(-3);
        expect(add(-1, 5)).toBe(4);
    });

    test('devrait gérer le zéro', () => {
        expect(add(0, 5)).toBe(5);
        expect(add(0, 0)).toBe(0);
    });

    test('devrait gérer les nombres décimaux', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
});