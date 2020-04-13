const mongoose = require("mongoose");

const User = require("../src/User");

before(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/users_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e);
  }
});

beforeEach(async () => {
  await User.collection.drop();
});
