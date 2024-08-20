// IMPLEMENTE AQUI A SUA FUNÇÃO

type Pessoa = {
    nome: string;
    numeroCartela: number;
};

function verificarPremiado(numeroSorteado: number, pessoasConcorrendo: Pessoa[]): string | undefined {
    for (const pessoa of pessoasConcorrendo) {
        if (pessoa.numeroCartela === numeroSorteado) {
            return pessoa.nome;
        }
    }
    return undefined;
}


export default verificarPremiado;
