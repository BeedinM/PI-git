module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        
    }, {
        tablename: 'usuarios',
        timestamps: false
    });
    return Usuario;
};