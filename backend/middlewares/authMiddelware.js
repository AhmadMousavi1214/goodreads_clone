const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'توکن یافت نشد' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId }; // فقط userId نگه می‌داریم
    next();
  } catch (err) {
    res.status(403).json({ message: 'توکن نامعتبر است' });
  }
}

module.exports = verifyToken;
