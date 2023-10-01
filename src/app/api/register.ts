import dbConnect from "@/config/dbConnect";
import User from "@/models/user";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    dbConnect();

    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({ user });
  }
}
