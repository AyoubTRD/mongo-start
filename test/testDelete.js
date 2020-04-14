const assert = require("assert");
const User = require("../src/User");

describe("Deleting users", () => {
  let user;
  beforeEach(async () => {
    user = await User.create({ name: "Anonymous" });
  });

  it("Deleting by id", async () => {
    await User.findByIdAndDelete(user._id);
    const removedUser = await User.findOne({ name: "Anonymous" });
    assert(!removedUser);
  });

  it("Direct delete", async () => {
    await user.remove();
    const removedUser = await User.findOne({ name: "Anonymous" });
    assert(!removedUser);
  });
});

describe("Deleting posts", () => {
  let user;

  beforeEach(async () => {
    user = await User.create({ name: "Joe", posts: [{ title: "Hello World" }] })
  })

  it("Deleting a post", async () => {
    user.posts = user.posts.filter(post => post.title !== "Hello World")
    await user.save()
    const joe = await User.findOne({ name: "Joe" })
    const removedPost = joe.posts.find(post => post.title === "Hello World")
    assert(!removedPost)
  })

  it("Deleting all posts", async () => {
    user.posts = []
    await user.save()

    const joe = await User.findOne({ name: "Joe" })

    assert(joe.posts.length === 0)
  })

})
