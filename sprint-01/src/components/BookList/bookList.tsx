import React, { useState } from "react";
import SearchFilter from "../searchFilter/Searchfilter";
import "./bookList.css";

type Book = {
  id: number;
  title: string;
};

type BookListProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const BookList = ({ books, setBooks, search, setSearch }: BookListProps) => {
  const [newBook, setNewBook] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const addBook = () => {
    if (newBook.trim() !== "") {
      setBooks([...books, { id: Date.now(), title: newBook.trim() }]);
      setNewBook("");
    }
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
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
        {filteredBooks.map((book) => (
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
