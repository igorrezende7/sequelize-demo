const { Sequelize, DataTypes } = require('sequelize');
const database = require('../db');

const User = database.define('user',{
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  }
})


module.exports = User
