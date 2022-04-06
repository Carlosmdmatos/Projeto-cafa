const db = require('./db')

const user = db.sequelize.define('usuarios', {
    nome:{
        type: db.Sequelize.STRING
    },
    valor:{
        type: db.Sequelize.STRING
    },
    date:{
        type: db.Sequelize.DATE
    }

})
//Criar Tabela
//user.sync({force:true})

module.exports = user