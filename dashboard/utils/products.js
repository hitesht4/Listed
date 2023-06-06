import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: Number, required: true },
  category: { type: String, required: true },
});

export default mongoose.models.Product || mongoose.model("Product", userSchema);
