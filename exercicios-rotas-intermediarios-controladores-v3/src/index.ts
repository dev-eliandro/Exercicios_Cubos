import express from 'express';
import { obterMensagemInicial, listarConvidados, detalharConvidado } from './controladores';
import { validarIdadeMaxima } from './intermediarios';

const app = express();

app.get('/', obterMensagemInicial);
app.get('/convidados', validarIdadeMaxima, listarConvidados);
app.get('/convidados/:id', detalharConvidado);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
