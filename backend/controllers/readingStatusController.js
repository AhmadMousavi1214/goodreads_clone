const db = require('../config/db');

exports.addToReadingStatus = async (req, res) => {
  const userId = req.user.id;
  const { book_id } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'کاربر احراز هویت نشده است' });
  }

  if (!book_id) {
    return res.status(400).json({ message: 'شناسه کتاب الزامی است' });
  }

  try {
    const bookId = parseInt(book_id);
    if (isNaN(bookId)) {
      return res.status(400).json({ message: 'شناسه کتاب باید عدد باشد' });
    }

    console.log('userId:', userId, 'bookId:', bookId);
    await db.query('CALL AddToReadingStatus(?, ?)', {
      replacements: [userId, bookId]
    });

    res.status(200).json({ message: 'کتاب به لیست "می‌خواهم بخوانم" اضافه شد' });
  } catch (error) {
    console.error('DB Error:', error);
    if (error.sqlState === '45000') {
      return res.status(400).json({ message: error.sqlMessage });
    }
    res.status(500).json({ message: 'خطا در افزودن کتاب' });
  }
};

exports.removeFromReadingStatus = async (req, res) => {
  const userId = req.user.id;
  const { book_id } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'کاربر احراز هویت نشده است' });
  }

  if (!book_id) {
    return res.status(400).json({ message: 'شناسه کتاب الزامی است' });
  }

  try {
    const bookId = parseInt(book_id);
    if (isNaN(bookId)) {
      return res.status(400).json({ message: 'شناسه کتاب باید عدد باشد' });
    }

    console.log('userId:', userId, 'bookId:', bookId);
    await db.query('CALL RemoveFromReadingStatus(?, ?)', {
      replacements: [userId, bookId]
    });

    res.status(200).json({ message: 'کتاب با موفقیت از لیست مطالعه حذف شد' });
  } catch (error) {
    console.error('DB Error:', error);
    if (error.sqlState === '45000') {
      return res.status(404).json({ message: error.sqlMessage });
    }
    res.status(500).json({ message: 'خطا در حذف کتاب' });
  }
};
exports.updateReadingStatus = async (req, res) => {
  const userId = req.user.id;
  const { book_id } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'کاربر احراز هویت نشده است' });
  }

  if (!book_id) {
    return res.status(400).json({ message: 'شناسه کتاب الزامی است' });
  }

  try {
    const bookId = parseInt(book_id);
    if (isNaN(bookId)) {
      return res.status(400).json({ message: 'شناسه کتاب باید عدد باشد' });
    }

    console.log('userId:', userId, 'bookId:', bookId);
    await db.query('CALL UpdateReadingStatus(?, ?)', {
      replacements: [userId, bookId]
    });

    res.status(200).json({ message: 'وضعیت کتاب به "خوانده شده" به‌روزرسانی شد' });
  } catch (error) {
    console.error('DB Error:', error);
    if (error.sqlState === '45000') {
      return res.status(400).json({ message: error.sqlMessage });
    }
    res.status(500).json({ message: 'خطا در به‌روزرسانی وضعیت کتاب' });
  }
};

exports.getUserReadingStatus = async (req, res) => {
  const userId = req.user.id;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'کاربر احراز هویت نشده است' });
  }

  try {
    const results = await db.query('CALL GetUserReadingStatus(?)', {
      replacements: [userId]
    });

    res.set('Cache-Control', 'no-store'); // غیرفعال کردن کش
    res.status(200).json({ books: results });
        console.log(results)
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ message: 'خطا در دریافت لیست کتاب‌ها' });
  }
};