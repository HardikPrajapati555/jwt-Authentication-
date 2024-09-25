require('dotenv').config(); // Load environment variables from .env

const { Sequelize } = require('sequelize');

// Using environment variables for database connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: process.env.SSL === 'true', // Enable SSL if specified in .env
      rejectUnauthorized: false // Set to false to avoid self-signed certificate issues
    }
  },
  logging: false, // Disable logging for production
});

// sequelize.sync(); // Uncomment if you want to sync models with the DB

module.exports = sequelize;
