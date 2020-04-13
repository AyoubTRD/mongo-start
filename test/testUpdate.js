const assert = require("assert");
const User = require("../src/User");

describe("Updating users", () => {
  let user;

  beforeEach(async () => {
    user = await User.create({ name: "Alex" });
  });

  it("Update user directly", async () => {
    await user.update({ name: "Joe" });
    const updatedUser = await User.findOne({ name: "Joe" });
    assert(!!updatedUser);
  });

  it("Update user with .findOneAndUpdate", async () => {
    await User.findOneAndUpdate({ name: user.name }, { name: "Joe" });
    const updatedUser = await User.findOne({ name: "Joe" });
    assert(!!updatedUser);
  });

  it("Update user with findByIdAndUpdate", async () => {
    await User.findByIdAndUpdate(user._id, { name: "Joe" });
    const updatedUser = await User.findOne({ name: "Joe" });
    assert(!!updatedUser);
  });
});
