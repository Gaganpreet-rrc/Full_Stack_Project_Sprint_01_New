import { useEffect, useState } from "react";
import type { Book } from "../types/Book";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/books", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          setBooks([]);
        }
      });
  }, []);

  const addBook = async (title: string) => {
    const res = await fetch("http://localhost:3000/books", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author: "Unknown" }),
    });

    const newBook = await res.json();

    if (newBook?.id) {
      setBooks((prev) => [...prev, newBook]);
    }
  };

  const removeBook = async (id: number) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return { books, addBook, removeBook };
}
