export default function resultadoVenda(compra: number, venda: number) {
    const resultado = venda - compra;
    
    if (resultado > 0) {
        return `O valor do lucro é: ${resultado}`;
    } else if (resultado < 0) {
        return `O valor do prejuízo é: ${Math.abs(resultado)}`;
    } else {
        return "Venda a preço de custo";
    }
}