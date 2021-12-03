const CommentController = require('../controllers/CommentController')

const router = require('express').Router()

/* GET home page. */
router.get('/:articleID/comments', CommentController.find)

router.post('/:articleID/comments', CommentController.create)
router.patch('/:articleID/comments/:id', CommentController.update)
router.delete('/:articleID/comments/:id', CommentController.destroy)

module.exports = router
