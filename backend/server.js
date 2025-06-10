require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const readingStatusRoutes = require('./routes/readingStatusRoutes');
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reading-status', readingStatusRoutes);



const PORT = process.env.PORT;


async function startServer() {
  try {
    // تست اتصال به دیتابیس
    const connection = await sequelize.authenticate();
    console.log('Connected to MySQL database.');

    // اگر اتصال موفق بود، ادامه می‌دهیم:
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Cannot connect to the database:', err);
    process.exit(1); // خروج با کد خطا، سرور استارت نمی‌خوره
  }
}

startServer();