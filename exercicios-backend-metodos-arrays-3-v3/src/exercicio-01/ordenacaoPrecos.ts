type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {
  // seu código aqui

  let n = precos.length;

  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
          if (filtroPreco === "crescente" && precos[j] > precos[j + 1]) {
              // Troca de elementos para ordem crescente
              let temp = precos[j];
              precos[j] = precos[j + 1];
              precos[j + 1] = temp;
          } else if (filtroPreco === "decrescente" && precos[j] < precos[j + 1]) {
              // Troca de elementos para ordem decrescente
              let temp = precos[j];
              precos[j] = precos[j + 1];
              precos[j + 1] = temp;
          }
      }
  }

  return precos;
  
}
export default solucao;
