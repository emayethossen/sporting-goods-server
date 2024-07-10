import { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export const Product = model<TProduct>("Product", ProductSchema);
