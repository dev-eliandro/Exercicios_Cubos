function solucao(cpf: string): string {
  // seu código aqui

  // Variável que armazena a quantidade total de caracteres do CPF, incluindo o traço
  const quantidadeTotalCaracteres = cpf.length;

  // Variável que armazena o CPF para validar se ele contém o hífen
  const cpfComHifen = cpf;

  // Variável que divide a string do CPF em duas partes (antes e depois do traço)
  const partesCPF = cpf.split('-');

  // Verificar se a entrada é uma string
  if (typeof cpf !== 'string') {
    return "CPF INVALIDO";
  }

  // Verificar o comprimento total do CPF
  if (quantidadeTotalCaracteres !== 12) {
    return "CPF INVALIDO";
  }

  // Verificar se o CPF contém o hífen
  if (!cpfComHifen.includes('-')) {
    return "CPF INVALIDO";
  }

  // Verificar se há exatamente duas partes após dividir pelo traço
  if (partesCPF.length !== 2) {
    return "CPF INVALIDO";
  }

  // Verificar a parte antes e depois do traço
  const parteAntesDoTraco = partesCPF[0];
  const parteDepoisDoTraco = partesCPF[1];

  // Verificar se a parte antes do traço tem 9 dígitos e se a parte depois do traço tem 2 dígitos
  if (parteAntesDoTraco.length !== 9 || parteDepoisDoTraco.length !== 2) {
    return "CPF INVALIDO";
  }

  // Verificar se todos os caracteres são dígitos na parte antes do traço
  for (let i = 0; i < parteAntesDoTraco.length; i++) {
    if (parteAntesDoTraco[i] < '0' || parteAntesDoTraco[i] > '9') {
      return "CPF INVALIDO";
    }
  }

  // Verificar se todos os caracteres são dígitos na parte depois do traço
  for (let i = 0; i < parteDepoisDoTraco.length; i++) {
    if (parteDepoisDoTraco[i] < '0' || parteDepoisDoTraco[i] > '9') {
      return "CPF INVALIDO";
    }
  }

  return "CPF VALIDO";

}

export default solucao;
