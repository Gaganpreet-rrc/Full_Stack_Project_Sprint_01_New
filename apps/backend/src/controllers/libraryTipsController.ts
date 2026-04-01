import { Request, Response } from "express";
import * as service from "../services/libraryTipsService";

export const getLibraryTips = async (req: Request, res: Response) => {
  try {
    const data = await service.getAllTips();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tips" });
  }
};

export const createLibraryTip = async (req: Request, res: Response) => {
  try {
    const data = await service.createTip(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error creating tip" });
  }
};

export const deleteLibraryTip = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const result = await service.deleteTip(id);
  res.json(result);
};