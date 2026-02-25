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
  const { isGridView, toggleView } = useLibrary();

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
        isGridView={isGridView}
      />
    </div>
  );
};

export default BookListPage;