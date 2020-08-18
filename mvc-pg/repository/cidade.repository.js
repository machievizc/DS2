const connection = require('../pg-connection')
module.exports = {
    find: () => {
        return connection.query('select * from cidade');
    },
    findOne: ( id ) => {
        return connection.query('select * from cidade where id = '+ id);
    },
    create: ( cidade ) => {
        return connection.query('insert into cidade (nome, uf) values ($1,$2) returning *', 
        [cidade.nome, cidade.uf]);
    },
    update: ( cidade ) => {
        return connection.query('update cidade set nome = $1, uf = $2 where id = $3  returning *', 
        [cidade.nome, cidade.uf, cidade.id]);
    },
    delete: ( id ) => {
        return connection.query('delete from cidade where id = $1', [id]);
    }
}