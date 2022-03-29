const Sequelize = require("sequelize");

const sequelize = new Sequelize('cafa', 'cafatwo', '17031999',
 {
   host: 'localhost',
   dialect:'mysql'
});


module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}