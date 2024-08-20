// IMPLEMENTE AQUI A SUA FUNÇÃO
type TPedido = {
  nomeCliente: string;
  nomePrato: string;
  quantidade: number;
};

type TAtendimento = "fila" | "pilha";

function solucao(
  pedidoSolicitado: TPedido,
  pedidos: TPedido[],
  tipoDeAtendimento: TAtendimento
): TPedido[] {
  // seu código aqui

  if (tipoDeAtendimento === "pilha") {
    // Adicionar o pedido no início do array
    pedidos.unshift(pedidoSolicitado);
  } else if (tipoDeAtendimento === "fila") {
    // Adicionar o pedido no final do array
    pedidos.push(pedidoSolicitado);
  }
  return pedidos;

}
export default solucao;
