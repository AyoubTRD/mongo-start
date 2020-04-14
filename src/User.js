const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    minlength: [3, "The name has to be at least 3 characters long"],
    required: [true, "The name is required"],
  },
  posts: [{ type: Schema.Types.ObjectID, ref: "post" }],
});

UserSchema.virtual("postCount").get(function() {
  return this.posts.length
})

const User = mongoose.model("user", UserSchema);

module.exports = User;
