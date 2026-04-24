import { Request, Response } from "express";
import { searchFilterService } from "../services/searchFilterService";
import { prisma } from "../services/prisma";

export const getSearchHistory = async (req: Request, res: Response) => {
  try {
    const clerkId = (req as any).auth?.userId;

    if (!clerkId) {
      return res.json([]);
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return res.json([]);
    }

    const data = await searchFilterService.getAll(user.id);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch search history" });
  }
};

export const createSearch = async (req: Request, res: Response) => {
  try {
    const clerkId = (req as any).auth?.userId;
    const { term } = req.body;

    if (!clerkId) {
      return res.status(401).json({ error: "Unauthorized  - no Clerk session"});
    }

    let user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId,
          name: "New User",
          email: `${clerkId}@temp.com`,
        },
      });
    }

    const newItem = await searchFilterService.create(term, user.id);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create search term" });
  }
};

export const deleteSearch = async (req: Request, res: Response) => {
  try {
    const clerkId = (req as any).auth?.userId;
    const id = Number(req.params.id);

    if (!clerkId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    await searchFilterService.remove(id, user.id);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete search term" });
  }
};