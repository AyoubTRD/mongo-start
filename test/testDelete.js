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
