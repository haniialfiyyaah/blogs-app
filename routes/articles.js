const router = require('express').Router()
const ArticleController = require('../controllers/ArticleController')
const comments = require('./comments')

/* GET home page. */
router.get('/', ArticleController.find)
router.get('/:id', ArticleController.findOne)

router.post('/', ArticleController.create)
router.patch('/:id', ArticleController.update)
router.delete('/:id', ArticleController.destroy)

router.use('/', comments)

module.exports = router
