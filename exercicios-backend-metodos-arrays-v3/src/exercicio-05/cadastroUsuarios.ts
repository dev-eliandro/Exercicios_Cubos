// IMPLEMENTE AQUI A SUA FUNÇÃO
type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(
  usuariosCadastrados: TUsuario[],
  novoUsuario: TUsuario
): TUsuario[] | string {
  // seu código aqui

  const emailJaCadastrado = usuariosCadastrados.some(usuario => usuario.email === novoUsuario.email);

  if (emailJaCadastrado) {
    return "E-MAIL INVALIDO";
  }

  // Adicionar o novo usuário à lista de usuários cadastrados
  usuariosCadastrados.push(novoUsuario);
  return usuariosCadastrados;
}
export default solucao;
