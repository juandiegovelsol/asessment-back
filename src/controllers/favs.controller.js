import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOneFav = async (req, res) => {
  const { title, description, link, list_idlist } = req.body;
  try {
    const newFav = await prisma.favs.create({
      data: { title, description, link, list_idlist },
    });
    res.status(201).json(newFav);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const deleteOneFav = async (req, res) => {};
