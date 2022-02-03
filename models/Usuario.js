/* const fs = require('fs');
const usuarios = require('../arquivos/cadastro.json')

exports.adicionarUsuario = ({ nomeUsuario, hashed, email, dataNascimento}) => {
    
    
    const id = usuarios.length + 1;
    
    const usuario = {
        id,
        nomeUsuario,
        hashed,
        email,
        dataNascimento
    };

    usuarios.push(usuario);
    fs.writeFileSync("./arquivos/cadastro.json", JSON.stringify(usuarios));
    return (usuario);
};

exports.buscarPorUsuario = nomeUsuario => usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario);

exports.buscarPorId = userId => usuarios.find(usuario => usuario.id === userId); */

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        nomeUsuario: {
            type: DataTypes.STRING(45),
            unique: true,
            notNull: true
        },
        hashed: {
            type: DataTypes.STRING(100),
            notNull: true
        },
        email: {
            type: DataTypes.STRING(45),
            unique: true,
            notNull: true
        }
        
    })
};