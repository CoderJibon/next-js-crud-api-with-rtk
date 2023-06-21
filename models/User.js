import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    timesStamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
