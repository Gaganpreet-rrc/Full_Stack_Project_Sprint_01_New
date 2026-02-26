import { useState } from "react";
import "../BookList/bookList.css";
import type { Book } from "../../types/Book";

type Props = {
  books: Book[];
  addBook: (title: string) => void;
  removeBook: (id: number) => void;
};

export const BookList = ({ books, addBook, removeBook }: Props) => {
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

      <div>
        {books.map((book) => (
          <div key={book.id}>
            {book.title}{" "}
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};