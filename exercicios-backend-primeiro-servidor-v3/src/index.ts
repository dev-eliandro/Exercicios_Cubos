import express from 'express'
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

const app = express();
const PORT = 3000;

// Função utilitária para obter os números do arquivo .env
const getNumbers = () => {
  const num1 = parseFloat(process.env.NUM_1 || '0');
  const num2 = parseFloat(process.env.NUM_2 || '0');
  return { num1, num2 };
};

// Rota para soma
app.get('/somar', (Requisição, Resposta) => {
  const { num1, num2 } = getNumbers();
  const result = (num1 + num2).toString();
  Resposta.send(result);
});

// Rota para subtração
app.get('/subtrair', (Requisição, Resposta) => {
  const { num1, num2 } = getNumbers();
  const result = (num1 - num2).toString();
  Resposta.send(result);
});

// Rota para multiplicação
app.get('/multiplicar', (Requisição, Resposta) => {
  const { num1, num2 } = getNumbers();
  const result = (num1 * num2).toString();
  Resposta.send(result);
});

// Rota para divisão
app.get('/dividir', (Requisição, Resposta) => {
  const { num1, num2 } = getNumbers();
  if (num2 === 0) {
    Resposta.send('Erro: Divisão por zero.');
  } else {
    const result = (num1 / num2).toString();
    Resposta.send(result);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
