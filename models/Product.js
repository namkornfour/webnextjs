import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productSKU: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    price: { type: Number, default: 0 },
    // pictures: [String],
    // note: String,
  },
  {
    timestamps: true,
  }
);         

const Product = mongoose.models?.Products || mongoose.model("Products", productSchema);

export default Product;
