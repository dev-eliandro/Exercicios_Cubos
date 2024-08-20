import checarSenha from './exercicio2';

describe('Testes de checagem de senha', () => {
    test('Deve retornar SENHA VALIDA para uma senha com 4 números', () => {
        expect(checarSenha('1234')).toBe('SENHA VALIDA');
    });

    test('Deve retornar SENHA VALIDA para uma senha com mais de 4 números', () => {
        expect(checarSenha('123456')).toBe('SENHA VALIDA');
    });

    test('Deve retornar SENHA INVÁLIDA para uma senha com menos de 4 caracteres', () => {
        expect(checarSenha('123')).toBe('SENHA INVÁLIDA');
    });

    test('Deve retornar SENHA INVÁLIDA para uma senha que contém letras', () => {
        expect(checarSenha('123a')).toBe('SENHA INVÁLIDA');
    });

    test('Deve retornar SENHA INVÁLIDA para uma senha que contém caracteres especiais', () => {
        expect(checarSenha('12@3')).toBe('SENHA INVÁLIDA');
    });

    test('Deve retornar SENHA INVÁLIDA para uma senha vazia', () => {
        expect(checarSenha('')).toBe('SENHA INVÁLIDA');
    });
});
