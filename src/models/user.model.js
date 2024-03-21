import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
});
export default mongoose.model("user", userSchema);
