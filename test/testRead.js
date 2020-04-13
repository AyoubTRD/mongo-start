const assert = require("assert");
const User = require("../src/User");

describe("Reading users", () => {
  let user;
  beforeEach(async () => {
    user = new User({ name: "loeuf" });
    await user.save();
  });

  it("Read users by name", async () => {
    const foundUser = await User.findOne({ name: "loeuf" });
    assert(String(foundUser._id) === String(user._id));
  });
});
