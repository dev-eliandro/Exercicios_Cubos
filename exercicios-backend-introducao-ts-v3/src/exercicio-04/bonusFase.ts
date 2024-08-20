function solucao(pontucao: number, faseSeguinte: number): number {
  // seu código aqui

  const fatorMultiplicacao: number = faseSeguinte-1
  const bonusFase: number = fatorMultiplicacao*pontucao
  return bonusFase

}

export default solucao;
