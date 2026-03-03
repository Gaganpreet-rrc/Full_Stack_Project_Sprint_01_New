import { useState } from "react";
import type { Book } from "../types/Book";
import { testBookData } from "../data/testBookData"; 

export function useBooks() {
  const [books, setBooks] = useState<Book[]>(testBookData);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<string[]>([]);

  const addBook = (title: string) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      author: "Unknown",
      available: true,
    };

    setBooks(prev => [...prev, newBook]);
  };

  const removeBook = (id: number) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

return {
  books,
  addBook,
  removeBook,
  search,
  setSearch,
  users,
  setUsers
};
}