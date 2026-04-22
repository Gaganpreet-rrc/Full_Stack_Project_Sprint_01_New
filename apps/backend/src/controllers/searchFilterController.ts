import { Request, Response } from "express";
import { searchFilterService } from "../services/searchFilterService";

export const getSearchHistory = async (req: Request, res: Response) => {
  try {
    const data = await searchFilterService.getAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch search history" });
  }
};

export const createSearch = async (req: Request, res: Response) => {
  try {
    console.log("HIT CREATE API", req.body);
    const { term } = req.body;
    const newItem = await searchFilterService.create(term);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create search term" });
  }
};

export const deleteSearch = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await searchFilterService.remove(id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete search term" });
  }
};