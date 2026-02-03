import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/common/layout/Layout";
import { useState } from "react";
import { Home } from "./Components/pages/Home";
import SearchFilterPage from "./Components/pages/SearchFilterPage";
import BookListPage from "./Components/pages/BookListPage";
import LibraryTipsPage from "./Components/LibraryTips/LibraryTips";

function App() {
  // Shared state for books
  const [books, setBooks] = useState([
    { id: 1, title: "The Marrow Thieves" },
    { id: 2, title: "Good Habits" },
    { id: 3, title: "Harry Potter" },
  ]);

  // Shared state for search filter
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route
            index
            element={<Home books={books} setBooks={setBooks} />}
          />

          {/* Book list page */}
          <Route
            path="booklist"
            element={<BookListPage books={books} search={search} />}
          />

          {/* Search/filter page */}
          <Route
            path="searchfilter"
            element={
              <SearchFilterPage search={search} setSearch={setSearch} />
            }
          />

          {/* Library tips page */}
          <Route
            path="library-tips"
            element={<LibraryTipsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
