type TDados = {
  pedido: string;
  quantidade: number;
  estimativaEntrega: number;
};

function solucao(dadosEntrega: TDados, diaAtual: number) {
  // seu código aqui
  const { estimativaEntrega } = dadosEntrega;

  if (diaAtual > estimativaEntrega) {
      return "ENTREGA ATRASADA";
  } else {
      return "ENTREGA NAO ATRASADA";
  }

}
export default solucao;
