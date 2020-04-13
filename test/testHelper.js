const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/users_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB Successfully!"))
  .catch((e) => console.log(e));
