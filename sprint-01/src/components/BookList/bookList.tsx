/**
 * BookList Component (I.3)
 *
 * Demonstrates Hook-Service-Repository pattern:
 * - Uses useLibraryContext hook for shared book state (add/remove books, toggle view)
 * - Uses searchService to validate new book input (Service)
 * - Updates data via the repository indirectly through the hook
 *
 * Flow: Component → Hook → Service → Repository
 * This keeps state shared between pages and avoids prop drilling.
 */

import { useState } from "react";
import "../BookList/bookList.css";
import { useLibraryContext } from "../../context/LibraryContext";
import { searchService } from "../../services/searchfilterService";
import type { Book } from "../../types/Book";

export const BookList = () => {
  // Hook usage: retrieves shared state and actions
  const { books, addBook, removeBook, isGridView, toggleView } = useLibraryContext();

  // Local state for new book input
  const [newBook, setNewBook] = useState("");

  // Handler for adding a new book
  const handleAdd = () => {
    // Service usage: validate input before adding
    const validation = searchService.validateSearch(newBook);
    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    // Hook usage: update state (which internally updates repository)
    addBook(newBook.trim());
    setNewBook("");
  };

  return (
    <section className="book-list">
      <h2>Available Books</h2>

      <div>
        {/* Accessible label for input */}
        <label htmlFor="new-book" className="sr-only">
          Add a new book
        </label>
        <input
          id="new-book"
          type="text"
          placeholder="Add a new book..."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Toggle between grid and list view */}
      <button onClick={toggleView}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

      {/* Display books dynamically */}
      <div className={isGridView ? "grid-view books" : "list-view books"}>
        {books.map((book: Book) => (
          <div key={book.id} className="book-item">
            <span>{book.title}</span>
            {/* Remove book using hook (updates repository internally) */}
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};