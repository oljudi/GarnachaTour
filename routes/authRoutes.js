const { Router } = require('express')
const router = Router()

const {
  loginView,
  signUpView
} = require('../controllers/auth.controller')

router.get('/login', loginView)
router.get('/signup', signUpView)

module.exports = router;
