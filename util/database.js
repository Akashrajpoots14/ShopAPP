const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Compiler_14', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
