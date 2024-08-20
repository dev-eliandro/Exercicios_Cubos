function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  // seu código aqui
  if(cpfsCadastrados.includes(cpfDigitado)){
    return 'CPF JÁ CADASTRADO'
  } return 'CADASTRO REALIZADO COM SUCESSO'
}
export default solucao;
