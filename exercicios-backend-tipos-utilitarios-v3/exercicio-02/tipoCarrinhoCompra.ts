type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}
type TipoTransacao = 'debito' | 'credito' | 'boleto';

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type CarrinhoCompra = {
  id: number;
  produtos: string[];
  valorTotal: number;
  tipoTransacao: Lowercase<TipoTransacao>;
}