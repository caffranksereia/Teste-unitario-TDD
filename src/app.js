require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
  });

const express = require('express');
//logica de criacao do servidor
class AppController{
    constructor(){
        this.express = espress();

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.express.use(express.json());

    }
    routes(){
        this.express.use(require('/rotes'));
    }
}

module.express = new AppController().express;