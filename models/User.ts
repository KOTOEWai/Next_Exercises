import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
});


export const User = models.User || model("User", UserSchema);
