import { useLibraryContext } from "../../context/LibraryContext";
import { BookList } from "../BookList/bookList";
import React from "react";
import type { Book } from "../../types/Book";
import BookList from "../BookList/bookList";
import { useLibrary } from "../../hooks/useLibrary";


type Props = { search: string };

export default function BookListPage({ search }: Props) {
  const { books, addBook, removeBook } = useLibraryContext();

  const filteredBooks = books.filter(book =>
const BookListPage = ({ books, setBooks, search }: BookListPageProps) => {
  const { isGridView, toggleView } = useLibrary();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

return (
    <div>
      <h1>Library Books</h1>
      <BookList 
        books={filteredBooks} 
        addBook={addBook} 
        removeBook={removeBook} 
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
}