type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  // seu código aqui

  const timesDoPais: { nome: string, pais: string, quantidadeTitulos: number }[] = [];

    // Filtra os times do país especificado
    for (let i = 0; i < times.length; i++) {
        if (times[i].pais === paisFiltrado) {
            timesDoPais.push(times[i]);
        }
    }

    // Verifica se encontrou algum time do país especificado
    if (timesDoPais.length === 0) {
        return "NAO ENCONTRADO";
    }

    // Implementa um algoritmo de ordenação (Bubble Sort) por quantidade de títulos em ordem decrescente
    for (let i = 0; i < timesDoPais.length - 1; i++) {
        for (let j = 0; j < timesDoPais.length - 1 - i; j++) {
            if (timesDoPais[j].quantidadeTitulos < timesDoPais[j + 1].quantidadeTitulos) {
                // Troca os elementos se estiverem fora de ordem
                let temp = timesDoPais[j];
                timesDoPais[j] = timesDoPais[j + 1];
                timesDoPais[j + 1] = temp;
            }
        }
    }

    return timesDoPais;
  
}
export default solucao;
