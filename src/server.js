const app = require('./app');
//aloca a porta quando for fazer o deploy;
app.listen(process.env.PORT || 3000);//caso nao exite uma env set para 300 
