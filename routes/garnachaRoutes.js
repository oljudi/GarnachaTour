const {Router} = require('express')
const router = Router()

const {
  homeView,
  filterView,
  filterPost,
  searchPost
} = require('../controllers/garnacha.controller')

router.get('/groute', homeView)

router.get('/filter', filterView)
router.post('/filter', filterPost)

router.post('/search', searchPost)
module.exports = router