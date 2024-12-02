const auth = (req, res, next) => {
  if (req.session.isAuthenticated === true) {
    next()
  } else {
    res.status(401).json({
      message: 'Not Authorized!'
    })
  }
}

module.exports = auth;
