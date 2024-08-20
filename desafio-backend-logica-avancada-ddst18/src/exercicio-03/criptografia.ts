function solucao(senhaDigitada: string, senhaCriptografada: string) {
  // seu código aqui
  if (senhaCriptografada === 'cubos'+senhaDigitada+'cubos'){
    return "LOGIN AUTORIZADO"
  } else {
    return "LOGIN NAO AUTORIZADO"
  }
}
export default solucao;
