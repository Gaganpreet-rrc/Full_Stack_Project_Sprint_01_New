import { Request, Response, NextFunction } from "express";

export const validateLibraryTip = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "Title and description are required",
    });
  }

  next();
};