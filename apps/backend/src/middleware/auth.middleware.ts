import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@clerk/backend";

export const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1];

    const session = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY!,
    });

    req.userId = session.sub;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};