const mongoose = require("mongoose")

const { Schema } = mongoose

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectID,
    ref: "user"
  },
  content: {
    type: String,
    required: [true, "The comment content is required"]
  }
})

const Comment = mongoose.model("comment", CommentSchema)

module.exports = Comment
