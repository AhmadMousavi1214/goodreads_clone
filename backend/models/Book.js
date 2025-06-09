// backend/models/Book.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  cover_image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  publish_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  average_rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
}, {
  tableName: 'books',
  timestamps: false
});

module.exports = Book;
