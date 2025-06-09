// backend/models/ReadingStatus.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ReadingStatus = sequelize.define('ReadingStatus', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: DataTypes.ENUM('Reading', 'Finished', 'Want to Read'),
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: 'readingstatus',
  timestamps: false
});

module.exports = ReadingStatus;
