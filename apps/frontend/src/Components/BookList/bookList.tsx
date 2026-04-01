/**
 * BookList Component (I.3)
 *
 * Shows the Hook-Service-Repository pattern:
 * - Uses useLibraryContext hook for shared book state such as (add/remove books, toggle view).
 * - Uses searchService to validate new book input.
 * - Updates data via the repository indirectly through the hook.
 *
 * This keeps state shared between pages and avoids prop drilling.
 */

import { useState, useEffect } from "react";
import "./bookList.css";
import { searchService } from "../../services/searchfilterService";
import { Book } from "./../../types/Book";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState("");
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => setIsGridView(!isGridView);

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);


  const handleAdd = async () => {
    const validation = searchService.validateSearch(newBook);
    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newBook,
        author: "Unknown"
      })
    });

    const data = await res.json();
    setBooks([...books, data]);
    setNewBook("");
  };


  const handleRemove = async (id: number) => {
    await fetch(`http://localhost:3000/api/books/${id}`, {
      method: "DELETE"
    });

    setBooks(books.filter(book => book.id !== id));
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

      <button onClick={toggleView}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

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
