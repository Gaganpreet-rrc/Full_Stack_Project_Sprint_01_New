import { useState } from "react";

type Book = { id: number; title: string };

type HomeProps = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

export function Home({ books, setBooks }: HomeProps) {
  const [newBook, setNewBook] = useState("");

  return (
    <div>
      <h2>Welcome to the Library</h2>
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
              setBooks([...books, { id: Date.now(), title: newBook.trim() }]);
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
