import React, { useState } from "react";
import "./bookList.css";

type Book = {
  id: number;
  title: string;
};

type BookListProps = {
  // Receives state and setter methods as props
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

const BookList = ({ books, setBooks }: BookListProps) => {
  const [newBook, setNewBook] = useState("");

  const addBook = () => {
    if (newBook.trim() !== "") {
      // Adding items
      setBooks([...books, { id: Date.now(), title: newBook.trim() }]);
      setNewBook("");
    }
  };

  const removeBook = (id: number) => {
    //  Removing items
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <section className="book-list">
      <h2>Available Books in Library</h2>

      <div className="add-book">
        {/* This is user input */}
        <input
          type="text"
          placeholder="Add a new book..."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="books">
        {/* Rendering using map() */}
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