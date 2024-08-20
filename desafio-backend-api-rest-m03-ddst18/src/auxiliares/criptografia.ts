function criptografarSenha(senha: string): string {
   
    const senhaInvertida = senha.split('').reverse().join('');
  

    const senhaCriptografada = `zz${senhaInvertida}yy`;
  
    return senhaCriptografada;
  }
  
  export default criptografarSenha;
  