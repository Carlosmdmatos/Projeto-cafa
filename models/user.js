const db = require('./db')

const user = db.sequelize.define('usuarios', {
    nome:{
        type: db.Sequelize.STRING
    },


})
//Criar Tabela
//user.sync({force:true})

module.exports = user