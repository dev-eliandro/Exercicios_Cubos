function solucao(vendasDiarias: number[]) {
  // seu código aqui
let VendasSemanais = 0

for (let venda of vendasDiarias){
  VendasSemanais = VendasSemanais + venda
}
return VendasSemanais
}
export default solucao;
