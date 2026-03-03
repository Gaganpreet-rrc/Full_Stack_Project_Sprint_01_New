import React from "react";
import type { Book } from "../../types/Book";
import BookList from "../BookList/bookList";
import { searchService } from "../../services/searchfilterService";
import { useLibrary } from "../../hooks/useLibrary";

type BookListPageProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  search: string;
};

const BookListPage: React.FC<BookListPageProps> = ({ books, setBooks, search }) => {
  const { isGridView, toggleView } = useLibrary();

  const validation = searchService.validateSearch(search);

  const filteredBooks = validation.valid
    ? searchService.filterBooks(books, search)
    : books; 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Library Books</h1>

      <button onClick={toggleView} style={{ marginBottom: "10px" }}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

      {!validation.valid && (
        <p style={{ color: "red", marginBottom: "10px" }}>{validation.message}</p>
      )}

      <BookList
        books={filteredBooks}
        setBooks={setBooks}
        isGridView={isGridView}
      />
    </div>
  );
};

export default BookListPage;