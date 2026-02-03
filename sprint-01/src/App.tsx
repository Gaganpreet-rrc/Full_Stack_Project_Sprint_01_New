import './App.css';
import { useState } from "react";
import BookList from './components/BookList/bookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import { Layout } from './components/common/layout/Layout';
import Login from './components/login/login';

function App() {

  const [users, setUsers] = useState<string[]>([]);

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

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
