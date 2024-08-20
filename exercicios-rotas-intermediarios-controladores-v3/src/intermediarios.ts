import { Request, Response, NextFunction } from 'express';

export const validarIdadeMaxima = (req: Request, res: Response, next: NextFunction) => {
  const { idadeMaxima } = req.query;

  if (idadeMaxima && !/^\d+$/.test(idadeMaxima as string)) {
    return res.status(400).send('Idade máxima inválida');
  }

  next();
};
