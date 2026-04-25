import { Request, Response } from "express";
import * as service from "../services/libraryTipsService";


export const getLibraryTips = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = await service.getAllTips(userId);
    res.json(data);
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({ message: "Error fetching tips" });
  }
};


export const createLibraryTip = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = await service.createTip(req.body, userId);
    res.status(201).json(data);
  } catch (error) {
    console.error("POST ERROR:", error);
    res.status(500).json({ message: "Error creating tip" });
  }
};


export const deleteLibraryTip = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const id = parseInt(req.params.id as string);

    const result = await service.deleteTip(id, userId);
    res.json(result);
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ message: "Error deleting tip" });
  }
};