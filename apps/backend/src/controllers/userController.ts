import { Request, Response } from "express";
import * as userService from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
try {
    const id = Number(req.params.id);
    const user = await userService.deleteUser(id);
    res.json({ message: "User deleted", user });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};