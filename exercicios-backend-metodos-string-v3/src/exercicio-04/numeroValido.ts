function solucao(endereco: string): boolean {
  // seu código aqui

  const componentes = endereco.split(', ');


  const numero_casa = componentes[1];


  if (typeof numero_casa === 'string') {
    
    for (let i = 0; i < numero_casa.length; i++) {
      if (numero_casa[i] < '0' || numero_casa[i] > '9') {
        return false;
      }
    }
    return true;
  } else {
    // Se por algum motivo o número da casa não for uma string, retornar false
    return false;
  }
}



export default solucao;
