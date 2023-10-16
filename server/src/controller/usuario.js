const { Usuario } = require('../banco-de-dados/connection');
const { Validator } = require('node-input-validator');
const bcrypt = require('bcrypt');

const criar = async function(requisicao, resposta) {

    //let email = requisicao.body.email;
    //let senha = requisicao.body.senha;

    const validador = new Validator( requisicao.body, {
        email : 'required|email',
        senha : 'required|minLength:6'
    },{
        'senha.required' : 'o campo senha é obrigatorio',
        'email.required' : 'o campo email é obrigatorio'
    });

    let passou = await validador.check();

    if (!passou) {
        resposta.status(422).json( validador.errors);
        return;
    }

    let senha = requisicao.body.senha;

    let hashSenha = await bcrypt.hash( senha, 10 );

    let novoUsuario = await Usuario.create({
        email : requisicao.body.email,
        senha : hashSenha
    })

    resposta.json(novoUsuario);
}

module.exports = {
    criar
}