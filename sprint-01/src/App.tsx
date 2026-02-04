import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/common/layout/Layout";
import { Home } from "./Components/pages/Home";
import Login from "./Components/login/login";
import BookListPage from "./Components/pages/BookListPage";
import SearchFilterPage from "./Components/pages/SearchFilterPage";
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

  // Shared state for users
  const [users, setUsers] = useState<string[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home books={books} setBooks={setBooks} />} />

          {/* Login page */}
          <Route path="login" element={<Login users={users} setUsers={setUsers} />} />

          {/* Book list page */}
          <Route
            path="booklist"
            element={<BookListPage books={books} setBooks={setBooks} search={search} />}
          />

          {/* Search/filter page */}
          <Route
            path="searchfilter"
            element={<SearchFilterPage search={search} setSearch={setSearch} />}
          />

          {/* Library tips page */}
          <Route path="library-tips" element={<LibraryTipsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
