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

    async add(item) {
        if (!item)
            return {}

        let newItem = await this.model.create(item, {
            raw: true
        })

        return newItem.dataValues
    }

    async remove(filtro) {
        if (!filtro)
            return 0

        let rem = await this.model.destroy({
            where: filtro,
            raw: true
        })

        return rem
    }
}

module.exports = Users