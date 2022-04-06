var http = require('http');

const express = require("express");
const app = express();

// COnexao BD MYSQL
const mysql= require('mysql');

//A partir do MYSQL 8 apresenta o erro ao utilizar o usuário root para conexão, necessário criar novo usuário (instrução no Readme)
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'cafatwo',
    password : '17031999',
    database : 'cafa'
});


connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
});

//A partir do MySql, inserir id na tabela users do banco de dados
connection.query("INSERT INTO usuarios(id_nome,id_valor,id_date) VALUES ('Jessica', '123456','12031999')", function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!');
    }else{
        console.log('Erro ao cadastra o usuario!');
    }
});

// Fazer update em dados específicos do banco de dados
/*connection.query ("UPDATE tabela SET nome = 'Cesar' WHERE id = 1",
function(err, result){
    if(lerr){
       console.log('Usuario editado com sucesso! ');
   }else{
       console.log('Erro: o usuario não foi editado com sucesso!');
   }
});*/

//Como apagar registro no banco de dados mysql
/* connection.query("DELETE FROM users WHERE id = 2", function(err, 
    result){
       if(!err){
           console.log("Usuario apagado com sucesso!");
       }else{
           console.log("Erro: o usuario não foi apagado com sucesso!");
       }
    }); */

//localhost:8080
/*app.listen(8080);*/
