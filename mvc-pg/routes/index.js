const express = require('express');
const routes = new express.Router();

// importa as rotas da aplicação
const cidadeRoute = require('../routes/cidade.route')
const pessoaRoute = require('../routes/pessoa.route')
routes.use('/cidades', cidadeRoute);
routes.use('/pessoas', pessoaRoute);

module.exports = routes;