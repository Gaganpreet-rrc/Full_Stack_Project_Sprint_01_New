import './App.css';
import BookList from './Components/BookList/bookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Components/common/layout/Layout'
import { useState } from "react";
import Home from './Components/pages/Home';

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="booklist"
            element={<BookList search={search} setSearch={setSearch} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;