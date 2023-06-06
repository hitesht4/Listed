import { connectDB } from "../../../utils/db";
import User from "../../../utils/user";

export default async function handler(req, res) {
  await connectDB();
  const { method, body } = req;

  if (method === "GET") {
    const data = await User.find();
    res.status(200).json({ data });
  }
  if (method === "POST") {
    try {
      await User.create(body);
      res.status(200).json(body);
    } catch (e) {
      console.log(e.message);
    }
  }
}
