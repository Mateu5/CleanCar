const express = require('express');
const { conexao, User } = require('./src/banco-de-dados/connection');

const { listarCliente } = require('./src/controller/teste');
const { criar, login } = require('./src/controller/usuario')

const app = express();
app.use( express.json() );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  //Permitir acesso de qualquer origem
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  


app.get("/teste", listarCliente);
app.post("/usuario", criar);
app.post("/login", login);


const serverPort = 3000

app.listen(serverPort, function(){
    console.log("Servidor escutando na porta " + serverPort );
});