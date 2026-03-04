import { useState } from "react";
import { bookListRepo } from "../repositories/bookListRepo";
import type { Book } from "../types/Book";
export function useBooks() {
  const [books, setBooks] = useState<Book[]>(bookListRepo.getAll());
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<string[]>([]);

  const refresh = () => {
    setBooks(bookListRepo.getAll());
  };

const addBook = (title: string) => {
  bookListRepo.add({
    title,
    author: "Unknown",
    available: true,
  });
  refresh();
};
  const removeBook = (id: number) => {
    bookListRepo.remove(id);
    refresh();
  };

  return {
    books,
    addBook,
    removeBook,
    search,
    setSearch,
    users,
    setUsers,
  };
}
