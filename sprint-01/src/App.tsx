import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './components/BookList/bookList';
import Home from './components/pages/Home';
import { Layout } from './components/common/layout/Layout';
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="searchFilter" element={<SearchFilter />} />
          <Route path="booklist" element={<BookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
