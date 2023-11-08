const sequelize = require('../../src/app/models');

module.exports= () =>{
    (Object.keys(sequelize.moduls).map(key =>{
        return sequelize.models[keys].destroy({truncate:true, force:true});
    }))
}