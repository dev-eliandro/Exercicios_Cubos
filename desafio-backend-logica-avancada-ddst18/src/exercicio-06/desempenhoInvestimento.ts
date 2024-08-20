function solucao(resultados: number[]) {
  // seu código aqui
let prejuizo = 0
let lucro = 0

for (const resultado of resultados) {
  if (resultado > 0) {
      lucro++;
  } else if (resultado < 0) {
      prejuizo++;
  }
}

if (lucro > prejuizo) {
  return "POSITIVO";
} else if (prejuizo > lucro) {
  return "NEGATIVO";
} else {
  return "NEUTRO";
}



}
export default solucao;
