import mongoose, { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
});

export const Product = models.Product || model("Product", ProductSchema);
