import './App.css';
import BookList from './Components/BookList/bookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home';
import { Layout } from './Components/common/layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booklist" element={<BookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
