const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('form', 'postgres', 'hardik', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable logging for production
});

// sequelize.sync(); // Sync models with DB

module.exports = sequelize;

    

    // module.exports= function