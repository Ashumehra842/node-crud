const protect = (req, res, next) => {
  if (!req.session.userId) {
    return res.render('users/login');
  }
  next();
};

module.exports = protect;