const mongoose = require("mongoose");

const User = require("../src/User");
const Post = require("../src/Post");
const Comment = require("../src/Comment");

before(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/users_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (e) {
    console.log(e);
  }
});

beforeEach(async () => {
  try {
    await User.collection.drop();
  } catch (e) {}
  try {
    await Post.collection.drop();
  } catch (e) {}
  try {
    await Comment.collection.drop();
  } catch (e) {}
});

after(async () => {
  await mongoose.disconnect();
});
