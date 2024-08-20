import resultadoVenda  from "./exercicio1"

describe ('Testes de calculo',() => {
test('Deve verificar o resultado de venda com lucro', () =>{
    expect (resultadoVenda(10,2)).toBe("O valor do prejuízo é: 8")
    expect (resultadoVenda(16,8)).toBe("O valor do prejuízo é: 8")
    expect (resultadoVenda(60,2)).toBe("O valor do prejuízo é: 58")
})
test('Deve verificar o resultado de venda com prejuizo', () =>{
    expect (resultadoVenda(6,2)).not.toBe("O valor do prejuízo é: 3")

})
})