const User = require('../models/User')

exports.homeView = (req, res, next) => {
  res.render('garnacha/home')
}

