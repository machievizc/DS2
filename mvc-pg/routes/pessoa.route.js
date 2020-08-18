const express = require('express');
const routes = express.Router();
const PessoaController = require('../controller/pessoa.controller');

routes.get('/', PessoaController.find);
routes.post('/', PessoaController.create);
routes.get('/:id([0-9]+)', PessoaController.findOne);
routes.put('/:id([0-9]+)', PessoaController.update);
routes.delete('/:id([0-9]+)', PessoaController.delete);

module.exports = routes;