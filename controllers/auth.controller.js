exports.loginView = (res,req,next) => {
  req.render('auth/login')
}

exports.signUpView = (res,req,next) => {
  req.render('auth/signup')
}