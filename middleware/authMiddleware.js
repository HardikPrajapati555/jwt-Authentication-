const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/login');
  }

  const decoded = jwt.verify(token, 'your_jwt_secret');
  const user = await User.findByPk(decoded.userId, { include: ['Role', 'Permission'] });

  if (!user) {
    return res.redirect('/login');
  }

  req.user = user;
  next();
};

module.exports = authMiddleware;
