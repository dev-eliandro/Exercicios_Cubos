export default function solucao(cerveja: string, temperatura: number): string {
  // seu código aqui


  if (cerveja === "pilsen") {
    if (temperatura >= 0 && temperatura <= 4) {
      return "TEMPERATURA IDEAL";
    } else {
      return "TEMPERATURA NAO IDEAL";
    }
  } else if (cerveja === "trigo") {
    if (temperatura >= 4 && temperatura <= 6) {
      return "TEMPERATURA IDEAL";
    } else {
      return "TEMPERATURA NAO IDEAL";
    }
  } else if (cerveja === "ipa") {
    if (temperatura >= 7 && temperatura <= 10) {
      return "TEMPERATURA IDEAL";
    } else {
      return "TEMPERATURA NAO IDEAL";
    }
  } else {
    return "TIPO DE CERVEJA DESCONHECIDO";
  }
}

