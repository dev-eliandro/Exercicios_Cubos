export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {
  // seu código aqui



const diferenca = notaAlunoA-notaAlunoB 
const resultado = diferenca < 1.5 ? "DUPLA VALIDA" : "DUPLA INVALIDA"
return resultado
}
