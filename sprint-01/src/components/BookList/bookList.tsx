import { useState } from "react";
import "../BookList/bookList.css";
import type { Book } from "../../types/Book";
import { useBooks } from "../../hooks/useBooks";

type Props = {
  isGridView: boolean;
};

export const BookList = ({ isGridView }: Props) => {
  const { books, addBook, removeBook } = useBooks();
  const [newBook, setNewBook] = useState("");

  const handleAdd = () => {
    if (newBook.trim() !== "") {
      addBook(newBook.trim());
      setNewBook("");
    }
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
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};