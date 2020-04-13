const assert = require("assert");

const User = require("../src/User");

describe("Creating a user", () => {
  it("Saving a user", async () => {
    const user = new User({ name: "Anonymous" });
    await user.save();
    assert(!user.isNew);
  });
});
