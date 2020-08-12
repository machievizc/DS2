const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./pg-connection');
const pessoaRoutes = require('./routes/pessoa.route')

const app = express();
const porta = 3000;
app.use(bodyParser.json());
// rota pessoa
app.use(pessoaRoutes);

app.get('/', (req, res) => {
    res.send('um get só pra testar q ta funcionando')
})


// tenta conexão com o banco
connection.connect().then(() => {
    app.listen(porta, () => {
        console.log('Rodando na porta ' + porta)
    });
})
    .catch((error) => {
        error.code == '28P01' ? console.log('Password incorreto.') : console.log('error');
    });
