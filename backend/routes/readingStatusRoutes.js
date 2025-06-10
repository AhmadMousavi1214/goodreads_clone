const express = require('express');
const router = express.Router();
const { addToReadingStatus } = require('../controllers/readingStatusController');
const verifyToken = require('../middlewares/authMiddelware');
const { removeFromReadingStatus } = require('../controllers/readingStatusController');
const { updateReadingStatus } = require('../controllers/readingStatusController');
const { getAllBooks } = require('../controllers/bookController');
const { getUserReadingStatus } = require('../controllers/readingStatusController');

router.post('/add', verifyToken, addToReadingStatus);
router.post('/remove', verifyToken, removeFromReadingStatus);
router.post('/update', verifyToken, updateReadingStatus);
router.get('/list', verifyToken, getUserReadingStatus);

module.exports = router;


