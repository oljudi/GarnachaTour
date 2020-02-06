const {Router} = require('express')
const router = Router()

const {
  homeView,
  filterView,
  filterPost,
  searchView,
  searchPost,
  dishView,
  tcsView,
  enchView,
  sopView,
  burrView,
  chqView
} = require('../controllers/garnacha.controller')

router.get('/groute', homeView)

router.get('/filter', filterView)
router.post('/filter', filterPost)

router.get('/search/:idSearch', searchView)
router.post('/search', searchPost)

router.get('/dishView', dishView)

router.get('/tacos',tcsView)
router.get('/enchiladas', enchView)
router.get('/sopas', sopView)
router.get('/burritos', burrView)
router.get('/chilaquiles', chqView)

module.exports = router