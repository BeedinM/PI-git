const usuariosModel = require('../models/Usuario');

const bcryptjs = require('bcryptjs');

const { Usuario } = require('../database/models');

exports.cadastrarUsuario = async ({ nomeUsuario, senha, confirmaSenha, email }) => {
    //confirmar senha
    if( senha !== confirmaSenha ) {
        throw new Error('As senhas não conferem')
    };

    //fazer hash
    const hashed = bcryptjs.hashSync(senha);

    const usuario = await Usuario.create({
        nomeUsuario,
        hashed,
        email
    })

    return usuario;
}





