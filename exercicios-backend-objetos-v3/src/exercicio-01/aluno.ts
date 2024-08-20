type TAluno = { matricula: string; nome: string; idade: number };

function solucao(matricula: string, nome: string, idade: number): TAluno {
  // seu código aqui
  const alunos: TAluno =  {
    matricula: matricula,
    nome: nome,
    idade: idade

}
return alunos
}


export default solucao;
