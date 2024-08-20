type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {
  // seu código aqui

  if (produtosEncontrados.length === 0) {
    return "Nenhum produto encontrado";
  }

  // Inicializa a variável para armazenar o menor preço e a loja correspondente
  let menorPreco = produtosEncontrados[0].preco;
  let lojaMaisBarata = produtosEncontrados[0].loja;

  // Itera pelo array para encontrar o menor preço
  for (let i = 1; i < produtosEncontrados.length; i++) {
    if (produtosEncontrados[i].preco < menorPreco) {
      menorPreco = produtosEncontrados[i].preco;
      lojaMaisBarata = produtosEncontrados[i].loja;
    }
  }

  // Retorna a loja que oferece o produto ao menor preço
  return lojaMaisBarata;
}



  


export default solucao;
