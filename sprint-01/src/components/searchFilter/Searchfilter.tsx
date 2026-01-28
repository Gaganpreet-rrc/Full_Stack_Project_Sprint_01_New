import { useState } from "react";
import "./SearchFilter.css";

type Book = {
  id: number;
  title: string;
  category: string;
  year: number;
  available: boolean;
};

const booksData: Book[] = [
  { id: 1, title: "JavaScript Basics", category: "Programming", year: 2020, available: true },
  { id: 2, title: "React Advanced", category: "Programming", year: 2022, available: false },
  { id: 3, title: "The Power of Habit", category: "Self-Help", year: 2018, available: true },
  { id: 4, title: "Atomic Habits", category: "Self-Help", year: 2021, available: false },
];

function SearchFilter() {
  // Book list
  const [books, setBooks] = useState<Book[]>(booksData);

  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [sortOption, setSortOption] = useState("title");

  // Add book state
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Programming");
  const [newYear, setNewYear] = useState("");
  const [newAvailable, setNewAvailable] = useState(true);

  // Filter and sort books
  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? book.category === category : true) &&
      (availability
        ? availability === "available"
          ? book.available
          : !book.available
        : true)
    )
    .sort((a, b) => {
      if (sortOption === "title") return a.title.localeCompare(b.title);
      if (sortOption === "year") return a.year - b.year;
      return 0;
    });

  // Add a book
  const handleAddBook = () => {
    if (!newTitle || !newYear) {
      alert("Please enter title and year.");
      return;
    }

    const newBook: Book = {
      id: books.length + 1,
      title: newTitle,
      category: newCategory,
      year: Number(newYear),
      available: newAvailable,
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewYear("");
  };

  // Remove a book
  const handleRemoveBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <section className="search-filter">
      <header className="search-header">
        <h2>Library Explorer</h2>
        <p>Search, filter, and sort books easily</p>
      </header>

      {/* Search & Filters */}
      <form className="filter-panel">
        <input
          type="text"
          placeholder="Search by title"
          aria-label="Search books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          aria-label="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Self-Help">Self-Help</option>
        </select>

        <select
          aria-label="Filter by availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">All Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Checked Out</option>
        </select>

        <select
          aria-label="Sort books"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
        </select>
      </form>

      {/* Add Book */}
      <div className="add-book">
        <h3>Add a Book</h3>

        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="Programming">Programming</option>
          <option value="Self-Help">Self-Help</option>
        </select>

        <input
          type="number"
          placeholder="Year"
          value={newYear}
          onChange={(e) => setNewYear(e.target.value)}
        />

        <select
          value={String(newAvailable)}
          onChange={(e) => setNewAvailable(e.target.value === "true")}
        >
          <option value="true">Available</option>
          <option value="false">Checked Out</option>
        </select>

        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </div>

      {/* Book List */}
      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} ({book.category}) - {book.year} [
            {book.available ? "Available" : "Checked Out"}]
            <button onClick={() => handleRemoveBook(book.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchFilter;
