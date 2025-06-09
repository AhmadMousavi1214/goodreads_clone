const jwt = require('jsonwebtoken');
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

exports.register = async (req, res) => {
      console.log('req.body:', req.body);  // این رو اضافه کن و لاگ بگیر
  const { username, email, password } = req.body;


  try {
    // بررسی وجود کاربر با ایمیل مشابه
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    // ایجاد کاربر جدید بدون رمزنگاری پسورد
    const user = await User.create({
      username,
      email,
      password_hash: password,
    });

    // ساخت توکن JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ token, user: { id: user.id, username: user.username } });
  } catch (err) {
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // پیدا کردن کاربر بر اساس ایمیل
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    
    // بررسی تطابق پسورد (بدون هش)
    const isMatch = password === user.password_hash;
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // ساخت توکن JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ token, user: { id: user.id, user_name: user.user_name } });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
};
