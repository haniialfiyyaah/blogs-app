const mongoose = require('mongoose')
const { CommentSchema } = require('./comments')

const Articles = new mongoose.Schema({
  title: String,
  text: String,
  tags: [String],
  publish_date: { type: Date, default: Date.now },
  comments: [CommentSchema],
})

Articles.method('toJSON', function () {
  const { __v, ...object } = this.toObject()
  return object // hide _id
})

module.exports = { Articles: mongoose.model('Articles', Articles) }
