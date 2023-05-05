import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const generateToken = (req, res) => {
  try {
    const { email } = req.body;
    const payload = { email };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
    res.status(200).json({ ...payload, token });
  } catch (error) {
    res.status(500).json({ error: false });
  }
};

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  const user = await prisma.user.create({
    data: { email, password: hash },
  });
  res.status(201).json(user);
};
