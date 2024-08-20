type TAluno = { matricula: string; nome: string; media: number };

function solucao(aluno: TAluno): string {
  // seu código aqui


if (aluno.media>=6){
    return "APROVADO"
} else { return "REPROVADO"
}
}

export default solucao;
