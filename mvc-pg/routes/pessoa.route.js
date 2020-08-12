const express = require('express');
const routes = express.Router();
const PessoaController = require('../controller/pessoa.controller');

routes.get('/pessoas', PessoaController.find);
routes.post('/pessoas', PessoaController.create);
routes.get('/pessoas/:id', PessoaController.findOne);
routes.put('/pessoas/:id', PessoaController.update);

module.exports = routes;