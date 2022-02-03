module.exports = (sequelize, DataTypes) => {
    const Valorant = sequelize.define('Valorant', {
        valorant_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        pers_principal: {
            type: DataTypes.STRING(45),
            notNull: true
        },
        pers_secundario: {
            type: DataTypes.STRING(45),
            notNull: true
        },
        func_principal: {
            type: DataTypes.STRING(45),
            notNull: true
        },
        func_secundaria: {
            type: DataTypes.STRING(45),
            notNull: true
        },
        elo: {
            type: DataTypes.STRING(45),
            notNull: true
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true
        }      
    }, {
        tablename: 'usuarios',
        timestamps: false
    });

    Valorant.associate = (models) => {
        Valorant.hasMany(models.Usuario, {
            as: "Usuarios",

            foreignKey: 'usuario_id'
        })
    }

    return Valorant;
};