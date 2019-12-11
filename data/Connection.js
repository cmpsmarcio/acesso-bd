const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || "development"
const config = require('../config/config.json')[env]

class Connection {
    constructor() {
        this.connect = new Sequelize(config.database, config.username, config.password, config)
        return this.connect
    }
}

module.exports = Connection