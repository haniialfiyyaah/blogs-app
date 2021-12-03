const ArticleService = require('./ArticleService')

class CommentService {
  constructor(articleModel, commentModel) {
    this.articleModel = articleModel
    this.commentModel = commentModel
  }

  async create(articleID, data) {
    const comment = await this.commentModel.create(data)

    const articleService = new ArticleService(this.articleModel)
    await articleService.update(articleID, {
      $push: { comments: comment._id },
    })

    return comment
  }

  async find(articleID) {
    let comments = []
    const articleService = new ArticleService(this.articleModel)
    const article = await articleService.findById(articleID)
    for (let i = 0; i < article.comments.length; i++) {
      const id = article.comments[i]
      const comment = await this.commentModel.findById(id)
      comments.push(comment)
    }
    return comments
  }

  async update(articleID, id, data) {
    const articleService = new ArticleService(this.articleModel)
    const article = await articleService.findById(articleID)
    if (!article) return null
    return this.commentModel.findByIdAndUpdate(id, data)
  }

  async destroy(articleID, id) {
    const articleService = new ArticleService(this.articleModel)
    const article = await articleService.findById(articleID)
    if (!article) return null
    const deleted = await this.commentModel.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted)
      articleService.update(articleID, {
        $pull: { comments: { $elemMatch: id } },
      })
    return deleted
  }
}

module.exports = CommentService
