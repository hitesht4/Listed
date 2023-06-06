import { connectDB } from "../../../utils/db";
import Product from "../../../utils/products";

export default async function handler(req, res) {
  await connectDB();
  const { method } = req;

  if (method === "GET") {
    const data = await Product.find();
    res.status(200).json({ data });
  }
}
