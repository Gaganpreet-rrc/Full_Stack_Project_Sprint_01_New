import { useState, useEffect } from "react";
import "./bookList.css";
import { searchService } from "../../services/searchfilterService";
import { Book } from "./../../types/Book";
import { useUser } from "@clerk/clerk-react";
import { useLibraryContext } from "../../context/LibraryContext";

export const BookList = () => {
  const { isSignedIn } = useUser();
  const { isGridView } = useLibraryContext();

  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState("");

  useEffect(() => {
    if (!isSignedIn) {
      setBooks([]);
      return;
    }

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
      })
      .catch(() => setBooks([]));
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <h2>Please login to view your books</h2>;
  }

  const handleAdd = async () => {
    const validation = searchService.validateSearch(newBook);
    if (!validation.valid) return alert(validation.message);

    const res = await fetch("http://localhost:3000/books", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBook,
        author: "Unknown",
      }),
    });

    const data = await res.json();

    if (data?.id) {
      setBooks([...books, data]);
    }

    setNewBook("");
  };

  const handleRemove = async (id: number) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <section className="book-list">
      <h2>Available Books</h2>

      <div>
        <input
          type="text"
          placeholder="Add a new book..."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className={isGridView ? "grid-view books" : "list-view books"}>
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <span>{book.title}</span>
            <button onClick={() => handleRemove(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};
