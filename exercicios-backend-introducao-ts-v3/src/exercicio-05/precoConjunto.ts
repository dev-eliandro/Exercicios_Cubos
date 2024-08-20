function solucao(
  precoPeca1: number,
  precoPeca2: number,
  precoPeca3: number,
  quantidade: number
): number {
  // seu código aqui

  const precoConjunto: number = precoPeca1 + precoPeca2 + precoPeca3
  const precoTotalApagar: number = precoConjunto * quantidade
  return precoTotalApagar
}

export default solucao;
