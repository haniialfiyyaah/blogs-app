const { Articles } = require('../models/articles')
const ArticleService = require('../services/ArticleService')

class ArticleController {
  static async create(req, res, next) {
    try {
      const articleService = new ArticleService(Articles)
      const article = await articleService.create(req.body)
      res.status(201).json({ data: article })
    } catch (err) {
      next(err)
    }
  }

  static async find(req, res, next) {
    try {
      const articleService = new ArticleService(Articles)
      const articles = await articleService.find()
      res.status(200).json({ data: articles })
    } catch (err) {
      next(err)
    }
  }

  static async findOne(req, res, next) {
    try {
      const articleService = new ArticleService(Articles)
      const article = await articleService.findById(req.params.id)
      if (!article) return next({ name: 'NotFound' })
      res.status(200).json({ data: article })
    } catch (err) {
      next(err)
    }
  }

  static async update(req, res, next) {
    try {
      const articleService = new ArticleService(Articles)
      const article = await articleService.update(req.params.id, req.body)
      if (!article) return next({ name: 'NotFound' })
      res.status(200).json({ message: 'Success Update' })
    } catch (err) {
      next(err)
    }
  }

  static async destroy(req, res, next) {
    try {
      const articleService = new ArticleService(Articles)
      const article = await articleService.destroy(req.params.id)
      if (!article) return next({ name: 'NotFound' })
      res.status(200).json({ message: 'Success Delete' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ArticleController
