const {User} = require('../../src/app/models')

describe('Authentication',()=>{
    it('sshould sum two numbers',
    async () =>{
        const user = await User.create({
            name:"Fabio",
            email:"fabioeduardo@gmail.com",
            password_hash: "123456"
        });
        console.log(user);

        expect(user.email).tobe("fabioeduardo@gmail.com");
    });
});
