function solucao(livros: string[]): string | string[] {
  // seu código aqui
  if(livros.length=== 0){
    return "NENHUM LIVRO ENCONTRADO"

  } else{
    return livros.reverse()
  }
}
export default solucao;
