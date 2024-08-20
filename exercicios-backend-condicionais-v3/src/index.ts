const marcacaoRoleta = 45

const quantidadeCaixa = 256.5

const precoPassagem = 5.70

const quantidadeEsperada = marcacaoRoleta*precoPassagem
console.log(quantidadeEsperada)

if (quantidadeCaixa === quantidadeEsperada){
    console.log("TUDO CERTO")
} else if(quantidadeCaixa > quantidadeEsperada){
    console.log("SOBRANDO")
} else {
    console.log("FALTANDO")
}