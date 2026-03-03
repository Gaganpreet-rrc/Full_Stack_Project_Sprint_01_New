import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/common/layout/Layout";
import { Home } from "./Components/pages/Home";
import Login from "./Components/login/login";
import { BookListPage } from "./Components/pages/BookListPage";
import  SearchFilterPage  from "./Components/pages/SearchFilterPage";
import LibraryTipsPage from "./Components/LibraryTips/LibraryTips";
import {LibraryProvider} from "./context/LibraryContext";

function App() {

  return (
    <BrowserRouter>
      <LibraryProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="booklist" element={<BookListPage />} />
           <Route
              path="searchfilter"
              element={<SearchFilterPage />}
            />
            <Route path="library-tips" element={<LibraryTipsPage />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </LibraryProvider>
    </BrowserRouter>
  );
}

export default App;
