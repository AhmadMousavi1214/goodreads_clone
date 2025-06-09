// backend/models/Publisher.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Publisher = sequelize.define('Publisher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  contact_info: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'publishers',
  timestamps: false
});

module.exports = Publisher;
