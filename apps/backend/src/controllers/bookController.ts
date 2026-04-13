import { Request, Response } from "express";
import * as bookService from "../services/bookService";
import { getAuth } from "@clerk/express";

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookService.getBooks();
  res.json(books);
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;

    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await bookService.getUserByClerkId(clerkId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newBook = await bookService.createBook({
      title,
      author,
      userId: user.id
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
};

export const removeBook = async (req: Request, res: Response) => {
  try {
    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await bookService.getUserByClerkId(clerkId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const id = Number(req.params.id);

    const deleted = await bookService.deleteBookByUser(id, user.id);

    if (!deleted) {
      return res.status(404).json({ message: "Book not found or not yours" });
    }

    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
};
