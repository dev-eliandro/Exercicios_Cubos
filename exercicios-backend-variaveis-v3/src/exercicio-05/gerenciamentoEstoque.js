function solucao(quantidadeAcai) {
  // seu código aqui

  if (quantidadeAcai < 40) {
    return true;  // Necessário comprar mais açaí
} else {
    return false; // Estoque suficiente
}

}

module.exports = solucao;
