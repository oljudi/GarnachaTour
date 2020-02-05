const {Router} = require('express')
const router = Router()

const {
  homeView
} = require('../controllers/garnacha.controller')

router.get('/groute', homeView)

module.exports = router