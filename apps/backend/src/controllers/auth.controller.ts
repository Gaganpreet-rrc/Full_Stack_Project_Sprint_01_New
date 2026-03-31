import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await authService.login(email, password);

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await authService.getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};