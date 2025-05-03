
const protect = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('user/auth');
  }
  next();
};

module.exports = protect;