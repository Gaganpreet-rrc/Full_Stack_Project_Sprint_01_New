import React from "react";
import { BookList } from "../BookList/bookList";
import { useLibraryContext } from "../../context/LibraryContext";
import { searchService } from "../../services/searchfilterService";
 

export const BookListPage: React.FC = () => {
  const { books, search, isGridView, toggleView } = useLibraryContext();

  const filteredBooks =
    search && search.trim() !== ""
      ? searchService.filterBooks(books, search)
      : books;
 
  return (
    <div>
      <h1>Available Books</h1>
 
      <button onClick={toggleView}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

      <BookList
      />
    </div>
  );
}