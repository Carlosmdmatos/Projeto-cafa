const express= require("express");
const app = express();
const handlebars= require("express-handlebars");
const bodyparser= require("body-parser");
const user= require("./models/user")

app.engine('handlebars', handlebars.engine({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//rotas
app.get('/cad-user', function(req, res){
    res.render('cad-user');
});

app.get('/user', function(req, res){
    res.render('user');
});
app.post('/add-user', function(req, res){
    //res.send("Nome: " + req.body.nome + "<br>email: " + req.body.email + "<br>senha: " +req.body.senha)    
    user.create({
        nome: req.body.nome,
    }).then(function(){
        res.redirect("user")
        //res.send("Cadastrado")
    }).catch(function(erro){
        res.send("Erro: não cadastrado" + erro)
    })
});

app.listen(8080);