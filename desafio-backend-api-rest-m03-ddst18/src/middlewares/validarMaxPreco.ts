import { Request, Response, NextFunction } from 'express';

// Middleware para validar o parâmetro maxPreco
const validarMaxPreco = (req: Request, res: Response, next: NextFunction) => {
  const maxPrecoQuery = req.query.maxPreco;

  // Se maxPreco não estiver presente, apenas continue para o próximo middleware
  if (maxPrecoQuery === undefined) {
    return next();
  }

  // Verifica se maxPrecoQuery é uma string que pode ser convertida para um número
  const maxPrecoStr = maxPrecoQuery as string;
  const maxPreco = parseFloat(maxPrecoStr);

  // Verifica se maxPreco é um número válido e maior ou igual a zero
  if (!/^\d+(\.\d+)?$/.test(maxPrecoStr) || isNaN(maxPreco) || maxPreco < 0) {
    return res.status(400).json({ error: 'O preço máximo do evento deve conter apenas números e deve ser positivo' });
  }

  // Adiciona o maxPreco convertido ao objeto req.query como string
  req.query.maxPreco = maxPrecoStr;
  next();
};

export { validarMaxPreco };
