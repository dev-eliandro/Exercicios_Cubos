function checarSenha(senha: string): string {
    const isNumerica = /^[0-9]+$/.test(senha);

    if (senha.length >= 4 && isNumerica) {
        return "SENHA VALIDA";
    } else {
        return "SENHA INVÁLIDA";
    }
}

export default checarSenha;
