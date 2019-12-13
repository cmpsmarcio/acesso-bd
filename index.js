const Connection = require('./data/Connection')
const Users = require('./repository/classes/Users')

async function Main() {
    const connection = new Connection()
    const users = new Users(connection)

    let ret = await users.read()

    console.log('ret', ret)

    connection.close()

    return ret
}

// async function addItem() {
//     const item = {
//         name: 'Teste Inclusao',
//         email: 'teste@teste.com.br',

//     }
// }

Main()