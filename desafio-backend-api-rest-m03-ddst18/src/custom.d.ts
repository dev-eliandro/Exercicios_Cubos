import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      usuarioId?: string; // Adiciona a propriedade opcional usuarioId ao Request
    }
  }
}
