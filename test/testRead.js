const assert = require("assert");
const User = require("../src/User");

describe("Reading users", () => {
  let user;
  beforeEach(async () => {
    user = new User({ name: "loeuf" });
    await user.save();
  });

  it("Read user by name", async () => {
    const foundUser = await User.findOne({ name: "loeuf" });
    assert(foundUser._id.toString() === user._id.toString());
  });

  it("Read user by id", async () => {
    const foundUser = await User.findById(user._id);
    assert(foundUser._id.toString() === user._id.toString());
  });
});
