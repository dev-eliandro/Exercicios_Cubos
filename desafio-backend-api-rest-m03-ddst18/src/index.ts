import express, { Request, Response, NextFunction } from 'express';
import bancoDeDados from './bancoDeDados'; // Supondo que bancoDeDados é um objeto com a propriedade 'eventos'
import TEvento from './tipos/Evento'; // Tipo dos eventos
import TCompra from './tipos/Compra';
import TUsuario from './tipos/Usuario';
import validarComprovante from './middlewares';

const app = express();
const PORTA = process.env.PORTA || 3000;



// Rota para listar eventos
app.get('/eventos',(req: Request, res: Response) => {
  const { maxPreco } = req.query;

  // Acesse a propriedade correta que contém o array de eventos
  const eventos: TEvento[] = bancoDeDados.eventos;

  // Se maxPreco estiver presente, filtra os eventos pelo preço
  let eventosFiltrados: TEvento[] = eventos;
  if (maxPreco !== undefined) {
    const maxPrecoNumero = Number(maxPreco);
    
    // Verifica se maxPrecoNumero é um número válido
    if (!isNaN(maxPrecoNumero) && maxPrecoNumero >= 0) {
      eventosFiltrados = eventos.filter(evento => evento.preco <= maxPrecoNumero);
    } else {
      return res.status(400).json({
        mensagem: "O preço máximo do evento deve conter apenas números e deve ser positivo",
      });
    }
  }

  // Retorna os eventos filtrados ou não
  return res.status(200).json(eventosFiltrados);
});





// Middleware de validação de comprovante
function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { comprovante } = req.query;

  if (typeof comprovante !== 'string' || !comprovante.includes('/')) {
    return res.status(400).json({
      mensagem: "Falha na autenticação"
    });
  }

  const idUsuario = comprovante.split('/')[1];
  
  const usuario = bancoDeDados.usuarios.find((user: TUsuario) => user.id === idUsuario);

  if (!usuario) {
    return res.status(400).json({
      mensagem: "Falha na autenticação"
    });
  }

  (req as any).usuarioId = idUsuario; // Adiciona o ID do usuário à requisição para ser usado nas rotas
  next();
}

// Rota para criar uma nova compra
app.post('/compras', authMiddleware, (req: Request, res: Response) => {
  const { idEvento } = req.body;
  const idUsuario = (req as any).usuarioId;

  if (!idEvento) {
    return res.status(400).json({
      mensagem: "O identificador do evento é obrigatório"
    });
  }

  const evento = bancoDeDados.eventos.find((e: TEvento) => e.id === idEvento);

  if (!evento) {
    return res.status(404).json({
      mensagem: "Evento não encontrado"
    });
  }

  // Cria nova compra
  const novaCompra: TCompra = {
    id: 'novo-id-gerado', // Gerar um ID único aqui
    id_usuario: idUsuario,
    id_evento: idEvento,
  };

  bancoDeDados.compras.push(novaCompra);

  return res.status(201).json(novaCompra);
});

// Rota para listar compras de um usuário
app.get('/listcompras', authMiddleware, (req: Request, res: Response) => {
  const idUsuario = (req as any).usuarioId;

  const comprasDoUsuario = bancoDeDados.compras.filter((compra: TCompra) => compra.id_usuario === idUsuario);

  return res.status(200).json(comprasDoUsuario);
});

// Rota para cancelar uma compra
app.delete('/compras/:id', authMiddleware, (req: Request, res: Response) => {
  const { id } = req.params;
  const idUsuario = (req as any).usuarioId;

  const index = bancoDeDados.compras.findIndex((compra: TCompra) => compra.id === id && compra.id_usuario === idUsuario);

  if (index === -1) {
    return res.status(404).json({
      mensagem: "Evento não encontrado"
    });
  }

  bancoDeDados.compras.splice(index, 1);

  return res.status(204).send();
});

app.listen(PORTA, () => console.log(`API rodando na porta ${PORTA}`));
