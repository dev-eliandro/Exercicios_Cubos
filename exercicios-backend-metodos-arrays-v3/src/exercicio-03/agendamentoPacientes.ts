function solucao(agenda: string[], cancelamento: string): string | string[] {
  // seu código aqui
  const indice = agenda.indexOf(cancelamento);

  if (indice !== -1) {
    // Se estiver agendado, remover o paciente da agenda
    agenda.splice(indice, 1);
    return agenda;
  } else {
    // Se não estiver agendado, retornar a mensagem
    return "PACIENTE NAO AGENDADO";
  }
}
export default solucao;
