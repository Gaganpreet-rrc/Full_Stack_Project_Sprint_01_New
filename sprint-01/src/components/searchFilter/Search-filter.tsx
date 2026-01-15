import "./SearchFilter.css";

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  year: number;
  available: boolean;
};

function SearchFilter() {
  const books: Book[] = [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "9780132350884",
      category: "Programming",
      year: 2008,
      available: true,
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "9780201616224",
      category: "Programming",
      year: 1999,
      available: false,
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
      category: "Self-Help",
      year: 2018,
      available: true,
    },
  ];

  return (
    <section className="search-filter">
      <header className="search-header">
        <h2>📚 Library Explorer</h2>
        <p>Search, filter, and sort books easily</p>
      </header>

      <form className="filter-panel">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          aria-label="Search books"
        />

        <select aria-label="Filter by category">
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Self-Help">Self-Help</option>
        </select>

        <select aria-label="Filter by availability">
          <option value="">All Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Checked Out</option>
        </select>

        <select aria-label="Sort books">
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
        </select>
      </form>

      <div className="book-grid">
        {books.map((book) => (
          <article key={book.id} className="book-card">
            <h3>{book.title}</h3>

            <p className="author">{book.author}</p>

            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>

            <p>
              <strong>Year:</strong> {book.year}
            </p>

            <span
              className={
                book.available ? "status available" : "status unavailable"
              }
            >
              {book.available ? "Available" : "Checked Out"}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SearchFilter;
