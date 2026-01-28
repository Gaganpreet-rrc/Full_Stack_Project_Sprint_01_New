import React, { useState } from "react";
import SearchFilter from "../searchFilter/Searchfilter";
import "./bookList.css";

type BookListProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const BookList = ({ search, setSearch }: BookListProps) => {
  const [books, setBooks] = useState([
    "The Marrow Thieves",
    "Good Habits",
    "Harry Potter",
    "Rich Dad Poor Dad",
    "Cinderella",
  ]);

  const [newBook, setNewBook] = useState("");

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(search.toLowerCase())
  );

  // Add new book
  const addBook = () => {
    if (newBook.trim() !== "") {
      setBooks([...books, newBook.trim()]);
      setNewBook("");
    }
  };

  // Remove book
  const removeBook = (bookToRemove: string) => {
    setBooks(books.filter((book) => book !== bookToRemove));
  };

  return (
    <section className="book-list">
      <h2>Available Books in Library</h2>

      <SearchFilter search={search} setSearch={setSearch} />

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
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-item">
            {book}{" "}
            <button onClick={() => removeBook(book)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
