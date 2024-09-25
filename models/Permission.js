const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Permission = sequelize.define('Permission', {
  screen_create: DataTypes.BOOLEAN,
  screen_view: DataTypes.BOOLEAN,
  screen_update: DataTypes.BOOLEAN,
  screen_delete: DataTypes.BOOLEAN,
  playlist_create: DataTypes.BOOLEAN,
  playlist_view: DataTypes.BOOLEAN,
  playlist_update: DataTypes.BOOLEAN,
  playlist_delete: DataTypes.BOOLEAN,
  library_create: DataTypes.BOOLEAN,
  library_view: DataTypes.BOOLEAN,
  library_update: DataTypes.BOOLEAN,
  library_delete: DataTypes.BOOLEAN,
  reports_create: DataTypes.BOOLEAN,
  reports_view: DataTypes.BOOLEAN,
  reports_update: DataTypes.BOOLEAN,
  reports_delete: DataTypes.BOOLEAN,
  logs_create: DataTypes.BOOLEAN,
  logs_view: DataTypes.BOOLEAN,
  logs_update: DataTypes.BOOLEAN,
  logs_delete: DataTypes.BOOLEAN,
});

module.exports = Permission;
