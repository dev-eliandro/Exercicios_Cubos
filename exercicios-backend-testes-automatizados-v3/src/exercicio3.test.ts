import validarCadastro from './exercicio3';

describe('Testes de validação de cadastro', () => {
    test('Deve retornar true quando todos os campos estão presentes', () => {
        const dados = {
            nome: "Shaolin",
            email: "monge@gmail.com",
            senha: "1234",
        };
        expect(validarCadastro(dados)).toBe(true);
    });

    test('Deve retornar erro quando o nome está faltando', () => {
        const dados = {
            email: "monge@gmail.com",
            senha: "1234",
        };
        expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
    });

    test('Deve retornar erro quando o email está faltando', () => {
        const dados = {
            nome: "Shaolin",
            senha: "1234",
        };
        expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
    });

    test('Deve retornar erro quando a senha está faltando', () => {
        const dados = {
            nome: "Shaolin",
            email: "monge@gmail.com",
        };
        expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
    });

    test('Deve retornar erro quando todos os campos estão faltando', () => {
        const dados = {};
        expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
    });
});
