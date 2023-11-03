const express = require('express');
const { conexao, User } = require('./src/banco-de-dados/connection');

//const { criar, login } = require('./src/controller/usuario')
const { register } = require('./src/controller/RegisterController');
const { login } = require('./src/controller/LoginController');

const app = express();
app.use( express.json() );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  //Permitir acesso de qualquer origem
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.post("/register", register);
app.post("/login", login);


const serverPort = 3000

app.listen(serverPort, function(){
    console.log("Servidor escutando na porta " + serverPort );
});