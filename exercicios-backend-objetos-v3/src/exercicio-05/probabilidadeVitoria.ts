type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {
  // seu código aqui

  if (dados.probabilidades.length === 0) {
    return 'DADOS INSUFICIENTES';
  }

  // Soma as probabilidades
  let somaA: number = 0;
  for (let item of dados.probabilidades) {
    somaA += item;
  }

  // Calcula a média
  let media1 = somaA / dados.probabilidades.length;

  // Retorna a média calculada
  return media1;
}



export default solucao;
