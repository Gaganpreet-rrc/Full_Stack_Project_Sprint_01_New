import React from "react";
import type { Book } from "../../types/Book";
import BookList from "../BookList/bookList";
import { useLibrary } from "../../hooks/useLibrary";

type BookListPageProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  search: string;
};

const BookListPage = ({ books, setBooks, search }: BookListPageProps) => {
  const { isGridView, toggleView, showModal, openModal, closeModal, selectedBook } = useLibrary();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Library Books</h1>
      <button onClick={toggleView}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

      <BookList
        books={filteredBooks}
        setBooks={setBooks}
        openModal={openModal}
        isGridView={isGridView}
      />

      {showModal && selectedBook && (
        <div className="modal">
          <h2>{selectedBook.title}</h2>
          <p>Author: {selectedBook.author}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default BookListPage;