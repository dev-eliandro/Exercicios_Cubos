import { request, Router } from "express";
import express, { Request, Response, NextFunction } from 'express';
import bancoDeDados from "./bancoDeDados";
import TUsuario from "./tipos/Usuario";
import { validarMaxPreco } from './middlewares/validarMaxPreco'; // Ajuste o caminho conforme necessário
import { v4 as uuidv4 } from 'uuid';
import criptografarSenha from "./auxiliares/criptografia";
import fraseSecreta from "./fraseSecreta";
import validarComprovante from './middlewares';
import TCompra from "./tipos/Compra";




const gerarId = (): string => uuidv4(); // Garante que o ID é sempre uma string
const rotas = Router();
rotas.get('/', (requisicao,resposta) => {
    return resposta.status(200).json({
      mensagem: "API de vendas de ingressos"
    });
  });
  rotas.get('/eventos?maxPreco=', (requisicao,resposta) => {
    return resposta.status(200).json({
      mensagem: "API de vendas de ingressos"
    });
  });

  // Aplica o middleware na rota
rotas.get('/eventos', validarMaxPreco, (req: Request, res: Response) => {
  try {
    const maxPrecoQuery = req.query.maxPreco;

    // Converte maxPreco para número se estiver presente
    const maxPreco = maxPrecoQuery ? parseFloat(maxPrecoQuery as string) : undefined;

    if (typeof maxPreco === 'number' && !isNaN(maxPreco)) {
      // Filtra os eventos com base no maxPreco
      const eventosFiltrados = bancoDeDados.eventos.filter(evento => evento.preco <= maxPreco);
      return res.status(200).json(eventosFiltrados);
    }

    // Se nenhum filtro for passado ou maxPreco não for um número válido, retorna todos os eventos
    return res.status(200).json(bancoDeDados.eventos);
  } catch (error) {
    // Tratamento de erros internos do servidor
    return res.status(500).json({ error: 'Erro ao listar eventos' });
  }
});

// Função para verificar se o e-mail já está cadastrado
const emailJaCadastrado = (email: string): boolean => {
  return bancoDeDados.usuarios.some(usuario => usuario.email === email);
};



// Rota para criar um novo usuário
rotas.post('/usuarios', (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  // Verifica se o e-mail já está cadastrado
  if (emailJaCadastrado(email)) {
    return res.status(400).json({ mensagem: 'E-mail já cadastrado' });
  }

  try {
    // Criptografa a senha utilizando a função importada
    const senhaCriptografada = criptografarSenha(senha);

    // Cria o novo usuário
    const novoUsuario: TUsuario = {
      id: uuidv4(),
      nome,
      email,
      senha: senhaCriptografada
    };

    // Adiciona o novo usuário ao banco de dados
    bancoDeDados.usuarios.push(novoUsuario);

    // Retorna o usuário cadastrado excluindo a senha
    const { senha: _, ...usuarioSemSenha } = novoUsuario;
    return res.status(201).json(usuarioSemSenha);
  } catch (error) {
    // Tratamento de erros internos do servidor
    return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário' });
  }
});

// Função para verificar se o e-mail já está cadastrado
const encontrarUsuarioPorEmail = (email: string): TUsuario | undefined => {
  return bancoDeDados.usuarios.find(usuario => usuario.email === email);
};

// Função para verificar a senha criptografada
const verificarSenha = async (senha: string, senhaCriptografada: string): Promise<boolean> => {
  // Comparando senha fornecida com a senha criptografada armazenada
  // Essa função compara a senha de entrada com a criptografada no banco de dados.
  return senhaCriptografada === criptografarSenha(senha);
};



// Rota para fazer login
rotas.post('/login', async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  // Validação dos campos obrigatórios
  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  // Encontra o usuário pelo e-mail
  const usuario = encontrarUsuarioPorEmail(email);

  // Verifica se o e-mail existe e se a senha está correta
  if (!usuario || !(await verificarSenha(senha, usuario.senha))) {
    return res.status(400).json({ mensagem: 'E-mail ou senha inválidos' });
  }

  // Cria o comprovante de login
  const comprovante = `${fraseSecreta}/${usuario.id}`;

  // Retorna o comprovante de login
  return res.status(200).json({ comprovante });
});


// Middleware para validar o comprovante
rotas.use(validarComprovante);

// Rota para criar uma nova compra
rotas.post('/compras', (req: Request, res: Response) => {
  const { idEvento } = req.body;

  // Verifica se o identificador do evento foi enviado
  if (!idEvento) {
    return res.status(400).json({ mensagem: 'O identificador do evento é obrigatório' });
  }

  // Verifica se o evento existe
  const evento = bancoDeDados.eventos.find(evento => evento.id === idEvento);

  if (!evento) {
    return res.status(404).json({ mensagem: 'Evento não encontrado' });
  }

  // Verifica se o usuário está autenticado
  const usuario = req.usuarioId;
  if (!usuario) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  // Cria uma nova compra
  const novaCompra = {
    id: uuidv4(),
    id_usuario: usuario, 
    id_evento: idEvento,
  };

  // Adiciona a compra ao banco de dados
  bancoDeDados.compras.push(novaCompra);

  // Retorna a nova compra
  return res.status(201).json(novaCompra);
});


// Rota para listar compras do usuário logado
rotas.get('/compras', (req: Request, res: Response) => {
  const usuarioId = req.usuarioId; // O id do usuário logado obtido do middleware

  if (!usuarioId) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  // Filtra as compras do usuário logado
  const comprasUsuario = bancoDeDados.compras.filter(compra => compra.id_usuario === usuarioId);

  // Formata a resposta conforme esperado nos testes
  const comprasFormatadas = comprasUsuario.map(compra => ({
    id: compra.id,
    id_evento: compra.id_evento,
    id_usuario: compra.id_usuario,
    // Adicione aqui outras propriedades, se necessário
  }));

  return res.status(200).json(comprasFormatadas);
});

// Rota para listar eventos com filtro opcional
rotas.get('/eventos', (req: Request, res: Response) => {
  const filtro = req.query.filtro as string | undefined;

  // Se o filtro foi passado, valide-o
  if (filtro) {
    // Verifica se o filtro é um número e é maior ou igual a zero
    const numeroFiltro = Number(filtro);
    if (isNaN(numeroFiltro) || numeroFiltro < 0) {
      return res.status(400).json({ mensagem: 'O preço máximo do evento deve conter apenas números e deve ser positivo' });
    }

    // Filtra eventos pelo preço
    const eventosFiltrados = bancoDeDados.eventos.filter(evento => evento.preco <= numeroFiltro);
    return res.status(200).json(eventosFiltrados);
  }

  // Se o filtro não foi passado, retorna todos os eventos
  return res.status(200).json(bancoDeDados.eventos);
});


// Rota para cancelar uma compra
rotas.delete('/compras/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const usuarioId = req.usuarioId; // Deve ser uma string

  if (!usuarioId) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  // Encontra a compra com o id fornecido
  const compraIndex = bancoDeDados.compras.findIndex(
    c => c.id === id && c.id_usuario === usuarioId
  );

  if (compraIndex === -1) {
    return res.status(404).json({ mensagem: 'Compra não encontrada' });
  }

  // Remove a compra
  bancoDeDados.compras.splice(compraIndex, 1);

  res.status(204).send(); // Status 204 para sucesso sem corpo
});


// Rota para criar uma compra
rotas.post('/compras', (req: Request, res: Response) => {
  const { idEvento } = req.body;
  const usuario = req.usuarioId;

  if (!usuario) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  if (!idEvento) {
    return res.status(400).json({ mensagem: 'O identificador do evento é obrigatório' });
  }

  // Verifica se o evento existe
  const evento = bancoDeDados.eventos.find(e => e.id === idEvento);
  if (!evento) {
    return res.status(404).json({ mensagem: 'Evento não encontrado' });
  }

  /// Rota para criar uma compra
rotas.post('/compras', (req: Request, res: Response) => {
  const { idEvento } = req.body;
  const usuarioId = req.usuarioId; // Deve ser uma string

  if (!usuarioId) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  if (!idEvento) {
    return res.status(400).json({ mensagem: 'O identificador do evento é obrigatório' });
  }

  // Verifica se o evento existe
  const evento = bancoDeDados.eventos.find(e => e.id === idEvento);
  if (!evento) {
    return res.status(404).json({ mensagem: 'Evento não encontrado' });
  }

  // Gera um novo ID para a compra
  const idCompra = gerarId(); // Garante que `idCompra` é sempre uma string

  // Cria uma nova compra
  const novaCompra: TCompra = {
    id: idCompra,
    id_usuario: usuarioId,
    id_evento: idEvento,
  };

  bancoDeDados.compras.push(novaCompra);

  res.status(201).json(novaCompra);
});




})






  export default rotas
  

  



