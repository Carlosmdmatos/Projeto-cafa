const express= require("express");
const app = express();
const handlebars= require("express-handlebars");
const bodyparser= require("body-parser");
const moment= require("moment");
const User= require("./models/user");


app.engine('handlebars', handlebars.engine({
    defaultlayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        formatDate: (date) => { return moment(date).format("DD/MM/YYYY") }
    }
}))
app.set('view engine', 'handlebars')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//rotas
app.get('/cad-user', function(req, res){
    res.render('cad-user');
});

app.get('/user', function(req, res){ 
    /*User.findAll().then(function(usuarios){
        res.render('user', {usuarios: usuarios});
    })*/


    /*User.findOne({ where: {nome: 'Gustavo'} }).then(function(usuarios) {
        res.render('user', {usuarios: usuarios});
        // project will be the first entry of the Projects table with the title 'aProject' || null
      })*/
    

          User.findAll({
            limit: 1,
            where: {
              //your where conditions, or without them if you need ANY entry
            },
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function(usuarios){
            res.render('user', {usuarios: usuarios});
          });
          

});

app.post('/add-user', function(req, res){
    //res.send("Nome: " + req.body.nome + "<br>email: " + req.body.email + "<br>senha: " +req.body.senha)    
    User.create({
        nome: req.body.nome,
        valor:req.body.valor
    }).then(function(){
        res.redirect("user")
        //res.send("Cadastrado")
    }).catch(function(erro){
        res.send("Erro: não cadastrado" + erro)
    })
});


app.use(express.static('public'));





app.listen(8080);
