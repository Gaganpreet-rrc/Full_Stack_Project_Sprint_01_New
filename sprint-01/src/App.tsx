import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/common/layout/Layout";
import { Home } from "./Components/pages/Home";
import Login from "./Components/login/login";
import BookListPage from "./Components/pages/BookListPage";
import SearchFilterPage from "./Components/pages/SearchFilterPage";
import LibraryTipsPage from "./Components/LibraryTips/LibraryTips";
import {LibraryProvider} from "./context/LibraryContext";

function App() {
  // Shared state for search filter
  const [search, setSearch] = useState("");
  // Shared state for users
  const [users, setUsers] = useState<string[]>([]);

return (
    <BrowserRouter>
      <LibraryProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="booklist" element={<BookListPage search={search} />} />
            <Route path="searchfilter" element={<SearchFilterPage search={search} setSearch={setSearch} />} />
            <Route path="library-tips" element={<LibraryTipsPage />} />
            <Route path="login" element={<Login users={users} setUsers={setUsers} />} />
          </Route>
        </Routes>
      </LibraryProvider>
    </BrowserRouter>
  );
}

export default App;
