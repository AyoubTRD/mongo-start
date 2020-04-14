const mongoose = require("mongoose");
const { Schema } = mongoose

const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectID,
    ref: "user"
  },
  title: {
    type: String,
    required: [true, "The title is required"],
  },
  content: {
    type: String,
  },
  comments: [{
    type: Schema.Types.ObjectID,
    ref: "comment"
  }]
});

const Post = mongoose.model("post", PostSchema)

module.exports = Post;
