const User = require('../models/User')

exports.loginView = (req,res,next) => {
  res.render('auth/login', {message: req.flash('error')})
}

exports.signUpView = (req,res,next) => {
  res.render('auth/signup')
}

exports.signUpPost = async (req,res,next) => {
  const {name, email, password, colony} = req.body
  if(email === '' || password === ''){
    res.render('auth/signup', { 
      message: 'The input email/password are required'
    })
  }
  const userOnDB = await User.findOne({email})
  if(userOnDB !== null){
    res.render('auth/signup', {
      message: 'Mail already registered'
    })
  }
  await User.register({name, email, colony}, password)
  res.redirect('/login')
}

exports.profileView = async (req,res,next) => {
  const user = req.user
  res.render('auth/profile', {user})
}

exports.profilePost = async (req,res,next) => {

}

exports.savedView = async (req,res,next) => {
  res.render('auth/saved')
}

exports.savedPost = async (req,res,next) => {

}

exports.logout = (req,res) => {
  req.logout()
  res.redirect('/')
}
