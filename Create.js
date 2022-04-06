
const Sequelize = require("sequelize");

const sequelize = new Sequelize('cafa', 'cafatwo', '17031999',
 {
   host: 'localhost',
   dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso');
}).catch(function(err){
    console.log('Erro ao realizar conexao com BD: ' + err); 
});


const user = sequelize.define('usuarios', {
    // attributes
     nome: {
       type: Sequelize.STRING,
     },
     valor: {
       type: Sequelize.STRING,
   },
      date:{
        type: Sequelize.DATE,
      }
}); 

//Criar tabela com Sequelize
//user.sync({force: true});


//Inserir Registro banco de dados
/*user.create({
    nome: "Joaquim",
    valor: 11,
    date:12031999

})*/

