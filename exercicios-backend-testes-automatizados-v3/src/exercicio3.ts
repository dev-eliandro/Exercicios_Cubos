interface DadosCadastro {
    nome?: string;
    email?: string;
    senha?: string;
}

function validarCadastro(dados: DadosCadastro): string | boolean {
    if (!dados.nome || !dados.email || !dados.senha) {
        return "Todos os campos são obrigatórios";
    }
    return true;
}

export default validarCadastro;
