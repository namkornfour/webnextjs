import mongoose, { Schema } from "mongoose";

const supplierSchema = new Schema(
  {
    name: { type: String },
    location: { type: String },
  },
  {
    timestamps: true,
  }
);

const Supplier =
  mongoose.models?.Supplier || mongoose.model("Supplier", supplierSchema);

export default Supplier;
