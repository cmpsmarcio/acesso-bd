const Sequelize = require('sequelize')

const modelUsers = {
    name: 'Users',
    schema: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false 
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pass: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    options: {
        tableName: 'Users',
        timestamps: false,
        freezeTableName: 'false'
    }
}

module.exports = modelUsers