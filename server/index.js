const express = require('express');
const { conexao, User } = require('./src/banco-de-dados/connection');

const { listarCliente } = require('./src/controller/teste')

const app = express();
app.use( express.json() );


app.get("/teste", listarCliente);



const serverPort = 3000

app.listen(serverPort, function(){
    console.log("Servidor escutando na porta " + serverPort );
});