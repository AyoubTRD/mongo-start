const assert = require("assert");
const User = require("../src/User");

describe("Validating users", () => {
  it("Validate user with no name", async () => {
    try {
      const user = await User.create({});
      assert(false);
    } catch (e) {}
  });

  it("Validate user with below than 3 chars name", async () => {
    try {
      const user = await User.create({ name: "ba" });
      assert(false);
    } catch (e) {}
  });

  it("Validate user with valid name", async () => {
    const user = await User.create({ name: "loeuf" });
  });
});
