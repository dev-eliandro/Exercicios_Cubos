export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {
  // seu código aqui
  // Calcular o valor esperado em caixa
  const valorEsperado = marcacaoRoleta * precoPassagem;

  // Comparar o valor esperado com a quantidade presente no caixa
  if (quantidadeCaixa === valorEsperado) {
    return "TUDO CERTO";
  } else if (quantidadeCaixa > valorEsperado) {
    return "DINHEIRO SOBRANDO";
  } else {
    return "DINHEIRO FALTANDO";
  }




}
