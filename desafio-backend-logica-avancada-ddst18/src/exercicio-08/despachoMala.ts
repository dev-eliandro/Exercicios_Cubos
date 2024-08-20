type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  // seu código aqui

  let nomesPassageiros = "";
  let temPassageiroComTaxa = false;

  for (const passageiro of dadosPassageiros) {
      if (passageiro.pesoMala > 23) {
          if (temPassageiroComTaxa) {
              nomesPassageiros += " - ";
          }
          nomesPassageiros += passageiro.nome;
          temPassageiroComTaxa = true;
      }
  }

  return temPassageiroComTaxa ? nomesPassageiros : "SEM PASSAGEIROS";

}
export default solucao;
