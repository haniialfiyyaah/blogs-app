const { Articles } = require('../models/articles')
const { Comments } = require('../models/comments')
const CommentService = require('../services/CommentService')

class CommentController {
  static async create(req, res, next) {
    try {
      const commentService = new CommentService(Articles, Comments)
      const comment = await commentService.create(
        req.params.articleID,
        req.body
      )
      res
        .status(201)
        .json({ message: 'Success create new comment', data: comment })
    } catch (err) {
      next(err)
    }
  }

  static async find(req, res, next) {
    try {
      const commentService = new CommentService(Articles, Comments)
      const comments = await commentService.find(req.params.articleID)
      res.status(200).json({ data: comments })
    } catch (err) {
      next(err)
    }
  }

  static async update(req, res, next) {
    try {
      const commentService = new CommentService(Articles, Comments)
      const comment = await commentService.update(
        req.params.articleID,
        req.params.id,
        req.body
      )
      if (!comment) return next({ name: 'NotFound' })
      res.status(200).json({ message: 'Success Update' })
    } catch (err) {
      next(err)
    }
  }

  static async destroy(req, res, next) {
    try {
      const commentService = new CommentService(Articles, Comments)
      const comment = await commentService.destroy(
        req.params.articleID,
        req.params.id
      )
      if (!comment) return next({ name: 'NotFound' })
      res.status(200).json({ message: 'Success Delete' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CommentController
