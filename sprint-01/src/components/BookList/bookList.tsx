import React, { useState } from "react";
import "./bookList.css";
import { bookListRepo } from "../../repositories/bookListRepo";
import type { Book } from "../../types/Book";

type BookListProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

const BookList = ({ books, setBooks }: BookListProps) => {
  const [newBook, setNewBook] = useState("");

  const addBook = () => {
    if (newBook.trim() !== "") {
      bookListRepo.add({
        title: newBook.trim(),
        author: "Unknown",   
        available: true
      });

      setBooks(bookListRepo.getAll());
      setNewBook("");
    }
  };

  const removeBook = (id: number) => {
    bookListRepo.remove(id);
    setBooks(bookListRepo.getAll());
  };

  return (
    <section className="book-list">
      <h2>Available Books in Library</h2>

      <div className="add-book">
        <input
          type="text"
          placeholder="Add a new book..."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            {book.title}
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;