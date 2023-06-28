const Sequeleize = require('sequelize');

const sequelize = new Sequeleize("banco", "igor", "150700",{
  dialect:"mysql",
  host:"localhost"
})
module.exports = sequelize
