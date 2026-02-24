import type { Book } from "../../types/Book";
import React from "react";
import BookList from "../BookList/bookList";

type BookListPageProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  search: string;
};

const BookListPage = ({ books, setBooks, search }: BookListPageProps) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Library Books</h1>
      <BookList books={filteredBooks} setBooks={setBooks} />
    </div>
  );
};

export default BookListPage;