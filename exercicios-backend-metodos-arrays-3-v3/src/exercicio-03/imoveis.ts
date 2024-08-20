type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  // seu código aqui

  if (anuncios.length === 0) {
    return "NAO ENCONTRADO";
}


for (let i = 0; i < anuncios.length - 1; i++) {
    for (let j = 0; j < anuncios.length - 1 - i; j++) {
        if (anuncios[j].preco > anuncios[j + 1].preco) {
            // Troca os elementos se estiverem fora de ordem
            let temp = anuncios[j];
            anuncios[j] = anuncios[j + 1];
            anuncios[j + 1] = temp;
        }
    }
}

return anuncios;
  
}
export default solucao;
