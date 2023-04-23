import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const isValidUser = bcrypt.compareSync(password, user.password);
    if (isValidUser) {
      //aqui va el next para la generacion del token
      res.status(200).json({ message: "loged user" });
    } else {
      res
        .status(401)
        .json({ error: true, message: "invalid user or password" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
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
