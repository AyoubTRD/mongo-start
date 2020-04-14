const assert = require("assert");

const User = require("../src/User");
const Post = require("../src/Post");
const Comment = require("../src/Comment");

describe("Creating a user", () => {
  it("Saving a user", async () => {
    const user = new User({ name: "Anonymous" });
    await user.save();
    assert(!user.isNew);
  });
});

describe("Relationships", () => {
  let user
  let post
  let comment
  beforeEach(async () => {
    user = new User({ name: "loeuf" })
    post = new Post({ title: "Hello World", content: "Is Meilleur" })
    comment = new Comment({ content: "Nice" })

    user.posts.push(post._id)
    post.comments.push(comment._id)
    comment.author = user._id
    post.author = user._id

    await comment.save()
    await post.save()
    await user.save()
  })

  it("Post relationship", async () => {
    await user.populate("posts").execPopulate()
    assert(user.posts[0].title === "Hello World")
  })

  it("Comment relationship", async () => {
    await post.populate("comments").execPopulate()
    assert(post.comments[0].content === "Nice")
  })
});
