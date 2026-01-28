import "./App.css";
import BookList from "./Components/BookList/bookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/common/layout/Layout";
import { useState } from "react";
<<<<<<< HEAD
import Home from "./Components/pages/Home";
=======
import Home from './Components/pages/Home';
import { Layout } from './Components/common/layout/layout';
import SearchFilter from "./Components/SearchFilter/SearchFilter";
>>>>>>> 1e0e488a9cf190edfa819827f2a023036180e9e7

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Marrow Thieves" },
    { id: 2, title: "Good Habits" },
    { id: 3, title: "Harry Potter" },
  ]);

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="booklist"
            element={
              <BookList
                books={books}
                setBooks={setBooks}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="searchFilter" element={<SearchFilter />} />
          <Route path="booklist" element={<BookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
