const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')

const {
  loginView,
  signUpView,
  signUpPost,
  logout
} = require('../controllers/auth.controller')

router.get('/signup', signUpView)
router.post('/signup', signUpPost)

router.get('/login', loginView)
router.post('/login', 
  passport.authenticate('local',{
    successRedirect: '/groute',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/logout', logout)

module.exports = router;
