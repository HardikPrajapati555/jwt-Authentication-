const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Role = require('./Role');
const Permission = require('./Permission');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },                                                                                 
  password: {
    type: DataTypes.STRING,
    allowNull: false,                                                   
  },
});
                                                                                        
User.belongsTo(Role);
User.hasOne(Permission);

module.exports = User;
