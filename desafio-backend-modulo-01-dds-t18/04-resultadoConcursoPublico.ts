function soluction(aprovados: string[], numeroInscricao: string): string {
	// seu código aqui
	if (aprovados.includes(numeroInscricao)) {
        return "APROVADO";
    } else {
        return "REPROVADO";
    }


 
}
