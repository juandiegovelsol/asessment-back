import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createOneList = async (req, res) => {
  const { listname, user_iduser } = req.body;
  try {
    const newList = await prisma.list.create({
      data: { listname, user_iduser },
    });
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getAllList = async (req, res) => {
  try {
    const lists = await prisma.list.findMany({
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });
    if (lists.length >= 1) {
      const computedLists = lists.map(({ idlist, listname, user }) => {
        return { idlist, listname, useremail: user.email };
      });
      res.status(200).json(computedLists);
    } else {
      res.status(204).json({ error: true, message: "No Content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getOneList = async (req, res) => {};

export const deleteOneList = async (req, res) => {};
