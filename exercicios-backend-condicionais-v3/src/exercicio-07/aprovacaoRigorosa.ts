export default function solucao(
  media: number,
  frequencia: number,
  projetoFinal: number
): string {
  // seu código aqui
// Primeira condição de aprovação: média >= 60, frequência >= 75% e projetoFinal > 0
if (media >= 60 && frequencia >= 75 && projetoFinal > 0) {
  return "APROVADO";
}
// Segunda condição de aprovação: frequência >= 75% e projetoFinal >= 85, mesmo que média < 60
else if (frequencia >= 75 && projetoFinal >= 85) {
  return "APROVADO";
} 
// Caso nenhuma das condições acima sejam satisfeitas
else {
  return "REPROVADO";
}



}
