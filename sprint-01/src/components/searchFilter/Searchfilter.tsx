import "./Searchfilter.css";

/* Search & Filter Component */
function SearchFilter() {
  return (
    <section className="search-filter">
      {/* Component Header */}
      <header className="search-header">
        <h2>Library Explorer</h2>
        <p>Search, filter, and sort books easily</p>
      </header>

      {/* Search and Filter*/}
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
    </section>
  );
}

export default SearchFilter;
