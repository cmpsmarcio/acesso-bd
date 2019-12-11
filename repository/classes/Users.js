const modelUsers = require('../../data/models/Users')

class Users {
    constructor(connection) {
        this.conn = connection
        this.model = this.conn.define(modelUsers.name, modelUsers.schema, modelUsers.options)
        this.model.sync()
    }

    read(filtro) {
        if (!filtro)
            filtro = {}

        let ret = this.model.findAll({
            where: filtro,
            raw: true
        })
        return ret
    }
}

module.exports = Users