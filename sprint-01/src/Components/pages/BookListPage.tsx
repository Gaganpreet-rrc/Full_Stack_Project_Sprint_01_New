import type { Book } from "../../types/Book";
import React from "react";
import BookList from "../BookList/bookList";
import { searchService } from "../../services/searchfilterService";

type BookListPageProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  search: string;
};

const BookListPage = ({ books, setBooks, search }: BookListPageProps) => {

  const filteredBooks = searchService.filterBooks(books, search);

  return (
    <div>
      <h1>Library Books</h1>
      <BookList books={filteredBooks} setBooks={setBooks} />
    </div>
  );
};

export default BookListPage;