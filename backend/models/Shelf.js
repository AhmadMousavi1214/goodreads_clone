// backend/models/Shelf.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Shelf = sequelize.define('Shelf', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'shelves',
  timestamps: false
});

module.exports = Shelf;
