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

export const getAllList = async (req, res) => {};

export const getOneList = async (req, res) => {};

export const deleteOneList = async (req, res) => {};
