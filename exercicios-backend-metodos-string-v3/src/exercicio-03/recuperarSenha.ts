function solucao(numeroCadastrado: string): string {
  // seu código aqui
  if (numeroCadastrado.length < 4) {
    return "Número inválido";
}

const numeroFormatado = numeroCadastrado.slice(0, 2) + "*".repeat(numeroCadastrado.length - 4) + numeroCadastrado.slice(-2);
return numeroFormatado;





}
export default solucao;
