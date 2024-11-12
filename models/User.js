import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: {type : String, required : true},
    comments : {type: String},
    amount: {type: Number},
    age: {type: Number},
    scores: {type : [Number], default: []}
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;