export default function solucao(pontosA: number, pontosB: number): string {
  // seu código aqui
  
  if (pontosA >= 25 && pontosA - pontosB >= 2) {
    return "TIME A VENCEU O SET";
} else if (pontosB >= 25 && pontosB - pontosA >= 2) {
    return "TIME B VENCEU O SET";
} else if (pontosA > pontosB) {
    return "TIME A VENCENDO";
} else if (pontosB > pontosA) {
    return "TIME B VENCENDO";
} else {
    return "JOGO EMPATADO";
}



}
