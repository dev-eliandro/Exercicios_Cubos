type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): any {
  // seu código aqui
let SomaA: number = 0
let SomaB: number = 0


  for (let item of filme1.notas){
  SomaA += item
}
for (let item2 of filme2.notas){
  SomaB += item2
}

let MediaA = SomaA/filme1.notas.length
let MediaB = SomaB/filme2.notas.length

if(MediaA>MediaB){
  return filme1.nome
} else if(MediaA === MediaB){
  return "EMPATE"
} else { 
  return filme2.nome
}




}

export default solucao;
