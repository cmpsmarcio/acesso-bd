const Connection = require('../data/Connection.js')
const Users = require('../repository/classes/Users.js')

const newItem = {
    name: 'Inclusao test jest',
    email: 'inclusaojest@jest.com',
    pass: 'senhateste'
}

describe('Testes classe Users', () => {
    var conn
    var user

    beforeAll(async () => {
        conn = await new Connection()
        user = await new Users(conn)
    })

    test('inclusao', async () => {
        let result = await user.add(newItem)

        delete result.createdAt
        delete result.id

        expect(result).toMatchObject(newItem)
    })

    test('Leitura', async () => {
        let [result] = await user.read({
            email: 'inclusaojest@jest.com'
        })

        delete result.createdAt

        expect(result).toMatchObject(newItem)
    })

    test('Apagar', async () => {
        let result = await user.remove(newItem)

        console.log(result)

        expect(result).toBe(1)
    })

    afterAll(() => {
        conn.close()
    })
})