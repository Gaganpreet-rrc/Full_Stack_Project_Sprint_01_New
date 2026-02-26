import { useState } from "react";
import { useLibraryContext } from "../../context/LibraryContext";

export function Home() {
  const [newBook, setNewBook] = useState("");
  const { books, addBook } = useLibraryContext();

  return (
    <div>
      <h2>Welcome to the Library</h2>
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
