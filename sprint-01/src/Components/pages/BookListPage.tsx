import React from "react";
import { BookList } from "../BookList/bookList";
import { useLibraryContext } from "../../context/LibraryContext"; 

export const BookListPage: React.FC = () => {
  const { isGridView, toggleView } = useLibraryContext();
 

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
 
