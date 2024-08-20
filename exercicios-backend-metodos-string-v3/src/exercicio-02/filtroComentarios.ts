function solucao(comentario: string): boolean {
  // seu código aqui
  comentario = comentario.toLowerCase();
    
  
  if (comentario.includes("pandemia") || comentario.includes("covid")) {
      return false;
  } else {
      return true;
  }



}
export default solucao;
