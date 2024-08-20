function solucao(email: string): string {
  // seu código aqui

  if (email.includes("@")) {
    return "VALIDO";
} else {
    return "INVALIDO";
}

}
export default solucao;
