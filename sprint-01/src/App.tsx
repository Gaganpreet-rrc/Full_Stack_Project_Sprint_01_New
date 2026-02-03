import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import BookList from "./Components/BookList/bookList";
import LibraryTipsPage from "./pages/LibraryTipsPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Library Management App</h1>

        <nav>
          <Link to="/" style={{ marginRight: "1rem" }}>Books</Link>
          <Link to="/library-tips">Library Tips</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/library-tips" element={<LibraryTipsPage />} />
      </Routes>

      <footer>
        <p>Gaganpreet Kaur, Harmanpreet Kaur, Manjot Kaur, Parneet Kaur</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
