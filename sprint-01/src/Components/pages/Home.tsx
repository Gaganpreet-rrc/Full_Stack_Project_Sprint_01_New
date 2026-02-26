import { useState } from "react";
import type { Book } from "./../../types/Book";
import { useLibrary } from "../../hooks/useLibrary";
import "./Home.css";


type HomeProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

export function Home({ books, setBooks }: HomeProps) {
  const [newBook, setNewBook] = useState("");
  const { isGridView, toggleView } = useLibrary();

return (
  <div className={isGridView ? "grid" : "list"}>
    <h2>Welcome to the Library</h2>
    <button onClick={toggleView}>
      {isGridView ? "Switch to List View" : "Switch to Grid View"}
    </button>

    <p>Total books: {books.length}</p>

      <div>
        <input
          type="text"
          placeholder="Enter book name.."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
<button
  onClick={() => {
    if (newBook.trim() !== "") {
      setBooks([
        ...books,
        {
          id: Date.now(),
          title: newBook.trim(),
          author: "Unknown",
          available: true  
        }
      ]);
      setNewBook("");
    }
  }}
>
  Add Book
</button>
      </div>
    </div>
  );
}
