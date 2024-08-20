import { Request, Response, NextFunction } from 'express';
import bancoDeDados from './bancoDeDados'; // Ajuste o caminho conforme necessário
import fraseSecreta from './fraseSecreta'; // Ajuste o caminho conforme necessário
import TUsuario from './tipos/Usuario';

const validarComprovante = (req: Request, res: Response, next: NextFunction) => {
  const comprovante = req.query.comprovante as string;

  if (!comprovante) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  const [frase, id] = comprovante.split('/');

  if (frase !== fraseSecreta) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  const usuario = bancoDeDados.usuarios.find(usuario => usuario.id === id);

  if (!usuario) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' });
  }

  req.usuarioId = usuario.id; // Atribuindo o usuário ao request
  next();
};

export default validarComprovante;
