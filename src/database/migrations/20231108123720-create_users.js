'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up :(queryInterface, Sequelize)=>{
   return queryInterface.createTable('user',{
    id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      allowNull:false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull:false
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull:false
    },
    update_at:{
      type: Sequelize.DATE,
      allowNull:false
    },
    create_at:{
      type: Sequelize.STRING,
      allowNull:false
    }
   })
  },

  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropAllTables('users');
  }
};
