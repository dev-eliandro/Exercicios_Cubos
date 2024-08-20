function solucao(
  quantidadeCriancas: number,
  quantidadePreAdolescentes: number,
  quantidadeTotal: number
): number {
  // seu código aqui

  const carneCrianças = quantidadeCriancas * 100
  const carneAdolescentes = quantidadePreAdolescentes * 200
  const Adultos = quantidadeTotal - quantidadeCriancas - quantidadePreAdolescentes
  const carneAdultos =Adultos * 300

  const carneTotal = carneCrianças + carneAdolescentes + carneAdultos
  return carneTotal
}

export default solucao;
