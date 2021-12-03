const router = require('express').Router()
const comments = require('./comments')

/* GET home page. */
router.get('/')
router.get('/:id')

router.post('/')
router.patch('/:id')
router.delete('/:id')

router.use('/comments', comments)

module.exports = router
