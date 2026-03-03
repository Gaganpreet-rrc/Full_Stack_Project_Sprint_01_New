import { useState } from "react";
import "../BookList/bookList.css";
import { useLibraryContext } from "../../context/LibraryContext";
import { useLibrary } from "../../hooks/useLibrary";
import { searchService } from "../../services/searchfilterService";

export const BookList = () => {
  const { books, addBook, removeBook, isGridView } = useLibraryContext();

  const [newBook, setNewBook] = useState("");

  const handleAdd = () => {
  const validation = searchService.validateSearch(newBook);
  if (!validation.valid) {
    alert(validation.message);
    return;
  }
      addBook(newBook.trim());
      setNewBook("");
    
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
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};



