require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports ={
  host:process.env.db_host,
  username:process.env.db_username,
  password: process.env.db_password,
  database:process.env.db_database ,
  dialect: process.env.db_dialect || "postgres",
  storage: './__tests__/database.sqlite',
  operatorsAlioases: false,
  logging: false,
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
  
};
