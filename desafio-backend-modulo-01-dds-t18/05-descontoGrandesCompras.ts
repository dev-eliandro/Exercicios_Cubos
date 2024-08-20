function solucao(precosCarrinho: number[], minimoParaDesconto: number, desconto: number): number {

	// seu código aqui
	const precoTotal = precosCarrinho.reduce((acc, preco) => acc + preco, 0);
// Verifica se o preço total atende ao requisito mínimo para o desconto
if (precoTotal >= minimoParaDesconto) {
	// Aplica o desconto
	const valorPago = precoTotal - precoTotal * desconto;
	return valorPago;
} else {
	// Sem desconto aplicado
	return precoTotal;
}

 

	
}
