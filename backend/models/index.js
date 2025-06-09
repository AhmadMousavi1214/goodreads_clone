// backend/models/index.js

const sequelize = require('../config/db');

const Author = require('./Author');
const Book = require('./Book');
const Genre = require('./Genre');
const Publisher = require('./Publisher');
const ReadingStatus = require('./ReadingStatus');
const Review = require('./Review');
const Shelf = require('./Shelf');
const User = require('./User');

// --- ارتباطات ---

// Book ↔ Author
Book.belongsTo(Author, { foreignKey: 'author_id' });
Author.hasMany(Book, { foreignKey: 'author_id' });

// Book ↔ Genre
Book.belongsTo(Genre, { foreignKey: 'genre_id' });
Genre.hasMany(Book, { foreignKey: 'genre_id' });

// Book ↔ Publisher
Book.belongsTo(Publisher, { foreignKey: 'publisher_id' });
Publisher.hasMany(Book, { foreignKey: 'publisher_id' });

// Review ↔ Book
Review.belongsTo(Book, { foreignKey: 'book_id' });
Book.hasMany(Review, { foreignKey: 'book_id' });

// Review ↔ User
Review.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Review, { foreignKey: 'user_id' });

// ReadingStatus ↔ Book
ReadingStatus.belongsTo(Book, { foreignKey: 'book_id' });
Book.hasMany(ReadingStatus, { foreignKey: 'book_id' });

// ReadingStatus ↔ User
ReadingStatus.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(ReadingStatus, { foreignKey: 'user_id' });

// Shelf ↔ User
Shelf.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Shelf, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  Author,
  Book,
  Genre,
  Publisher,
  ReadingStatus,
  Review,
  Shelf,
  User
};
