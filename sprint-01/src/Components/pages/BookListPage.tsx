import React from "react";
import { useLibraryContext } from "../../context/LibraryContext";
import { BookList } from "../BookList/BookList";
import { searchService } from "../../services/searchfilterService";
 

/**
 * BookListPage Component
 *
 * - Uses useLibraryContext hook for shared book state
 * - Shows BookList component
 */
export const BookListPage: React.FC = () => {
  const { books, search, isGridView, toggleView } = useLibraryContext();

  // You can filter books here if needed
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Library Books</h1>
      <BookList />
    </div>
  );
};

