const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: 'Name cannot be empty' // validar que no este vacio
                },
                isAlpha: {
                    msg: 'Name must be only letters' // validar que el nombre solo contenga letras
                },
                len: {
                    args: [3, 20],
                    msg: 'Name length should be between 3 and 20 characters' // validar la longitud del nombre entre 3 y 20
                }
            }
        }
    }, {
        timestamps: false
    })
}