function solucao(pontosAcumulados: number, valorCompra: number) {
  // seu código aqui

  if (pontosAcumulados < 100) {
    return valorCompra;
} else if (pontosAcumulados >= 100 && pontosAcumulados <= 500) {
    return valorCompra * 0.9;
} else {
    return valorCompra * 0.8;
}

}



export default solucao;
