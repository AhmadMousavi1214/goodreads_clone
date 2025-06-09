const { Book, Author, Genre, Publisher } = require('../models');

// نمونه: گرفتن همه کتاب‌ها به همراه نویسنده، ژانر و ناشر
async function getAllBooks(req, res) {
  try {
    const books = await Book.findAll({
      include: [Author, Genre, Publisher]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAllBooks };
