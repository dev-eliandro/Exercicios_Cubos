function solucao(pesoAdicionado) {
  // seu código aqui

  // Peso extra do prato controlado
  const pesoExtra = 0.15;
    
  // Calcula o peso real do objeto
  const pesoObjeto = pesoAdicionado + pesoExtra;

  return pesoObjeto;



}

module.exports = solucao;
