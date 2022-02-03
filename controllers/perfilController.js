const session = require('express-session');
const { Usuario } = require('../database/models');
const { Valorant } =  require('../database/models')

exports.conferirId = async (usuario_id) => {
    const usuario = await Usuario.findOne({
        where: {
            usuario_id
        }
    })
    
    return usuario.dataValues;
}

exports.addValorant = async ({ pers_principal, pers_secundario, func_principal, func_secundaria, elo }) => { 
    const perfVal = await Valorant.create({
        pers_principal,
        pers_secundario,
        func_principal,
        func_secundaria,
        elo
     })

     return perfVal;
}

