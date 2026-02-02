import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/layout/Layout";
import { useState } from "react";

import Home from "./components/pages/Home";
import SearchFilterPage from "./components/pages/SearchFilterPage";
import BookListPage from "./components/pages/BookListPage";

function App() {
  const [books] = useState([
    { id: 1, title: "The Marrow Thieves" },
    { id: 2, title: "Good Habits" },
    { id: 3, title: "Harry Potter" },
  ]);

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
              />
            }
          />

          <Route
            path="searchfilter"
            element={
              <SearchFilterPage
                search={search}
                setSearch={setSearch}
              />
            }
          />

          <Route
            path="booklist"
            element={
              <BookListPage books={books}/>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;