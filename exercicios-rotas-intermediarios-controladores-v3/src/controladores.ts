import { Request, Response } from 'express';
import bancoDeDados, { TPessoa } from '../bancoDeDados';

export const obterMensagemInicial = (req: Request, res: Response) => {
  res.send('API de lista de convidados');
};

export const listarConvidados = (req: Request, res: Response) => {
  const { idadeMaxima } = req.query;

  let convidados: TPessoa[] = bancoDeDados;

  if (idadeMaxima) {
    const idade = parseInt(idadeMaxima as string, 10);
    convidados = convidados.filter(convidado => convidado.idade <= idade);
  }

  res.json(convidados);
};

export const detalharConvidado = (req: Request, res: Response) => {
  const { id } = req.params;
  const convidado = bancoDeDados.find(convidado => convidado.id === parseInt(id, 10));

  if (!convidado) {
    return res.status(404).send('Convidado não encontrado');
  }

  res.json(convidado);
};
