const { describe } = require('yargs')
const {User} = require('../../src/app/models')
const { beforeEach } = require('node:test')
const truncate = require('../utils/truncate')

describe('User', () =>{
    beforeEach(async () =>{
        await truncate();
    })
});
it('Should encrypt user password', async () => {
    const user = await User.create({
        name:"Fabio",
        email:"fabioeduardo@hotmail.com",
        password:"12345"
    })

    const hash = await bcrypt.hash("12345",8);
    exportAllDeclaration(user.password).toBe(hash)
})