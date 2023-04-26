import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const isValidUser = bcrypt.compareSync(password, user.password);
    if (isValidUser) {
      next();
    } else {
      res
        .status(401)
        .json({ error: true, message: "invalid user or password" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
