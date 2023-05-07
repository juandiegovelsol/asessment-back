import { computeData } from "../functions/computeData.js";
import { computeDataOneList } from "../functions/computeDataOneList.js";
import { PrismaClient } from "@prisma/client";
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
        favs: {
          select: {
            title: true,
            description: true,
            link: true,
          },
        },
      },
    });
    if (lists.length >= 1) {
      const computedLists = computeData(lists);
      res.status(200).json(computedLists);
    } else {
      res.status(204).json({ error: true, message: "No Content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getOneList = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const userList = await prisma.user.findUnique({
      where: {
        iduser: +id,
      },
      include: {
        list: {
          include: {
            favs: {
              select: {
                idfavs: true,
                title: true,
                description: true,
                link: true,
              },
            },
          },
        },
      },
    });
    if (Object.keys(userList).length >= 1) {
      const computedlist = computeDataOneList(userList);
      res.status(200).json(computedlist);
    } else {
      res.status(204).json({ error: true, message: "No Content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
    console.log("error", error);
  }
};
/* export const getOneList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await prisma.list.findUnique({
      where: {
        idlist: +id,
      },
      include: {
        user: {
          select: {
            email: true,
          },
        },
        favs: {
          select: {
            title: true,
            description: true,
            link: true,
          },
        },
      },
    });
    if (Object.keys(list).length >= 1) {
      const computedlist = computeData(list);
      res.status(200).json(computedlist);
    } else {
      res.status(204).json({ error: true, message: "No Content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
}; */

export const deleteOneList = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleted = await prisma.list.delete({
      where: {
        idlist: +id,
      },
    });

    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};
