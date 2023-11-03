const { Usuario } = require('../banco-de-dados/connection');
const { Validator } = require('node-input-validator');
//const bcrypt = require('bcrypt');

const criar = async function(requisicao, resposta) {

    //let email = requisicao.body.email;
    //let senha = requisicao.body.senha;

    const validador = new Validator( requisicao.body, {
        name : 'required|minLength:6',
        email : 'required|email',
        senha : 'required|minLength:6',
        cep: 'sometimes|maxLength:10',
    },{
        'name.required' : 'o campo nome é obrigatorio',
        'senha.required' : 'o campo senha é obrigatorio',
        'email.required' : 'o campo email é obrigatorio',
        'cep.required': 'O campo CEP é obrigatório.',
    });

    let matched  = await validador.check();

    if (!matched) {
        resposta.status(422).json( validador.errors);
        return;
    }

    //let hashSenha = await bcrypt.hash( senha, 10 );

    let novoUsuario = await Usuario.create({
        name : requisicao.body.name,
        email : requisicao.body.email,
        senha : requisicao.body.senha,
        cep : requisicao.body.cep,
    })

    resposta.json(novoUsuario);
}

const login = async function(requisicao, resposta){

    const validador = new Validator( requisicao.body, {
        email : 'required|email',
        senha : 'required'
    },{
        'senha.required' : 'o campo senha é obrigatorio',
        'email.required' : 'o campo email é obrigatorio'
    });

    let passou = await validador.check();

    if (!passou) {
        resposta.status(422).json( validador.errors);
        return;
    }

    let usuario = await Usuario.findOne({
        where : {
            email : requisicao.body.email
        }
    })

    if( usuario === null ) {
        return resposta.status(422).json({
            email: 'E-mail não cadastrado'
        })
    }

    let senha = requisicao.body.senha;

    //let senhaCorreta = await bcrypt.compare( senha, usuario.senha);

    //if(!senhaCorreta){
    if(senha =! usuario.senha){
        return resposta.status(422).json({
            senha : 'senha incorreta'
        })
    }

    resposta.json( usuario );
}

module.exports = {
    criar,
    login
}