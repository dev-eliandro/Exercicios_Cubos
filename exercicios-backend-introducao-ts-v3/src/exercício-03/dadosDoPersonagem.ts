function solucao(
  nomePersonagem: string,
  classe: string,
  pontuacao: number
): string {
  // seu código aqui

  const frase: string = 'OLÁ, ' + nomePersonagem + '. VOCE É UM ' + classe + ' COM PONTUAÇÃO ATUAL DE ' + pontuacao

  return frase

}

export default solucao;
