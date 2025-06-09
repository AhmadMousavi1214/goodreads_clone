// backend/models/Author.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  death_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: 'authors',
  timestamps: false
});

module.exports = Author;
