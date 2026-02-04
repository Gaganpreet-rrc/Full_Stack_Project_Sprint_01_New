import './App.css';
import { useState } from "react";
import BookList from './components/BookList/bookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import { Layout } from './components/common/layout/Layout';
import Login from './components/login/login';

function App() {
  // Shared state for books
  const [books, setBooks] = useState([
    { id: 1, title: "The Marrow Thieves" },
    { id: 2, title: "Good Habits" },
    { id: 3, title: "Harry Potter" },
  ]);
const [users, setUsers] = useState<string[]>([]);
  // Shared state for search filter
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* pass state to pages */}
          <Route index element={<Home users={users} />} />

          <Route
            path="login"
            element={<Login users={users} setUsers={setUsers} />}
          />

          <Route
            path="booklist"
            element={<BookList />}
          />

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
