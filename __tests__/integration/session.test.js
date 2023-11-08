const request= require("supertest");

const app = require('../../src/app')

const {User} = require('../../src/app/models')
const truncate = require('../utils/truncate');

describe('Authentication',() =>{
    beforeEach(async () =>{
        await truncate();
    })

    it('should authenticate with valid credentials',
    async () =>{
        const user = await User.create({
            name:"Fabio",
            email:"fabioeduardo@gmail.com",
            password: "123456"
        });
        const response = await request(app)
            .post('/session')
            .send({
                email:user.email,
                password:":12345"
            })

        expect(response.status).tobe(200);
    });
});
