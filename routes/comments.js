const router = require('express').Router()

/* GET home page. */
router.get('/')
router.get('/:id')

router.post('/')
router.patch('/:id')
router.delete('/:id')

module.exports = router
