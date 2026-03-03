import { useState } from "react";
import { bookListRepo } from "../repositories/bookListRepo";

export function useBooks() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(bookListRepo.getAll());


  const addBook = (title: string) => {
    bookListRepo.add({
      title,
      author: "Unknown",
      available: true
    });
    setBooks(bookListRepo.getAll());
  };

  const removeBook = (id: number) => {
    bookListRepo.remove(id);
    setBooks(bookListRepo.getAll());
  };

  return { books, addBook, removeBook, search, setSearch };
}