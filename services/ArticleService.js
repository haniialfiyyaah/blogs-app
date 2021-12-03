class ArticleService {
  constructor(model) {
    this.model = model
  }

  create(data) {
    return this.model.create(data)
  }
  find() {
    return this.model.find()
  }
  findById(id) {
    return this.model.findById(id)
  }
  update(id, data) {
    return this.model.findByIdAndUpdate(id)
  }
  destroy(id) {
    return this.model.findByIdAndDelete(id)
  }
}

module.exports = ArticleService
