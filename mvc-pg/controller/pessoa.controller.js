const pessoaRepository = require('../repository/pessoa.repository');

module.exports = {
    find: (req, res) => {
        pessoaRepository.find()
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            })
    },
    findOne: (req, res) => {
        pessoaRepository.findOne(req.params.id)
            .then((result) => {
                result.rows[0] ? res.send(result.rows[0]) : res.status(404).send('Not Found');
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            })
    },
    create: (req, res) => {
        const pessoa = req.body;
        pessoaRepository.create(pessoa)
            .then((result) => {
                res.status(201).send(result.rows[0]);
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },
    update: (req, res) => {
        const pessoa = req.body;
        pessoa.id = req.params.id;
        pessoaRepository.update(pessoa)
            .then((result) => {

                if (result.rows.length > 0) {
                    res.send(result.rows[0]);
                } else {
                    res.status(404).send({ msg: 'Registro não encontrado' });
                }

            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },
}