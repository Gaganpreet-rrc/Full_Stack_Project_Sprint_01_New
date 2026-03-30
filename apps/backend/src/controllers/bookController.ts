import { Request, Response } from "express";
import * as bookService from "../services/bookService";

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookService.getBooks();
  res.json(books);
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, userId } = req.body;

  const newBook = await bookService.createBook({ title, author, userId });
  res.status(201).json(newBook);
};

export const removeBook = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await bookService.deleteBook(id);
  res.json({ message: "Book deleted" });
};