function solucao(listaAlunos: string[], ordemAlfabetica: boolean){
  // seu código aqui

  if (ordemAlfabetica) {
    // Ordena a lista de alunos em ordem alfabética
    for (let i = 0; i < listaAlunos.length - 1; i++) {
        for (let j = i + 1; j < listaAlunos.length; j++) {
            if (listaAlunos[i] > listaAlunos[j]) {
                // Troca os elementos se estiverem fora de ordem
                let temp = listaAlunos[i];
                listaAlunos[i] = listaAlunos[j];
                listaAlunos[j] = temp;
            }
        }
    }
}
return listaAlunos;
  
}
export default solucao;
