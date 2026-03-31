import { Request, Response, NextFunction } from "express";

export const validateSearch = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { term } = req.body;

  if (!term || !term.trim()) {
    return res.status(400).json({ error: "Search term is required" });
  }

  if (term.length < 2) {
    return res.status(400).json({ error: "Minimum 2 characters required" });
  }

  next();
};