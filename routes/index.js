const router = require('express').Router()

const { errorHandlers } = require('../middlewares/errorHandlers')
const articles = require('./articles')

router.use('/articles', articles)
router.use(errorHandlers)

module.exports = router
