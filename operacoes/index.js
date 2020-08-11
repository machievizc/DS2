const express = require('express');
const bodyParser = require('body-parser');
const operacaoRoutes = require('./routes/operacoes.routes');

const app = express();
const porta = 3000;
app.use(bodyParser.json());

app.use(operacaoRoutes);


app.listen(porta, () => {
    console.log('Rodando na porta ' + porta)
});