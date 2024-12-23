const express = require('express');
const connectToDatabase = require('./src/database/database');
const app = express();
const port = process.env.PORT;

app.use(express.json());
connectToDatabase();

app.get('/', (req, res) => {
  res.send({
    message: 'Bem vindo ao nosso market-place!',
  });
});

app.listen(port , () => {
  console.log(`Servidor Rodando em: http://localhost:${port}`);
});