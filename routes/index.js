const { Router } = require('express')
const router = Router()

const {
  homeView
} = require('../controllers/index.controller')

router.get('/', homeView)

module.exports = router;
