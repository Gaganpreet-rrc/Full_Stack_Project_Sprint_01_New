import { useState } from "react";
import { useLibraryContext } from "../../context/LibraryContext";
import { useLibrary } from "../../hooks/useLibrary";
import "./Home.css";

export function Home() {
  const [newBook, setNewBook] = useState("");
  const { books, addBook } = useLibraryContext();

  const { isGridView, toggleView } = useLibrary();

return (
  <div className={isGridView ? "grid" : "list"}>
    <h2>Welcome to the Library</h2>
    <button onClick={toggleView}>
      {isGridView ? "Switch to List View" : "Switch to Grid View"}
    </button>

    <p>Total books: {books.length}</p>

      <input
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
        placeholder="Add book"
      />
      <button
        onClick={() => {
          if (newBook.trim()) {
            addBook(newBook.trim());
            setNewBook("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
