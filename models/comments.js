const mongoose = require('mongoose')

const Comments = new mongoose.Schema({
  name: String,
  text: String,
  date: { type: Date, default: Date.now },
})

Comments.method('toJSON', function () {
  const { __v, ...object } = this.toObject()
  return object // hide _id
})

module.exports = {
  Comments: mongoose.model('Comments', Comments),
  CommentSchema: Comments,
}
