import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: Number, required: true },
  category: { type: String, required: true },
  week: { type: Number, required: true },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
