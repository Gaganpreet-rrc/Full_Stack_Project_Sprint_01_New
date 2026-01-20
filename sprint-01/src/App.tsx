import './App.css';
import SearchFilter from './components/SearchFilter/SearchFilter';
import './App.css'
import LibraryTips from "./components/LibraryTips/LibraryTips";

import BookList from './components/BookList/bookList'
import LibraryTips from "./Components/LibraryTips/LibraryTips";
function App() {
  return (
    <div className="app">
      <SearchFilter />
    </div>
  )
}

export default App
  return (
    <>
    <BookList />

    <header>
        <h1>Library Management App</h1>
      </header>

      <LibraryTips />

      <footer>
        <p>Gaganpreet Kaur, Harmanpreet Kaur, Manjot Kaur, Parneet Kaur</p>
      </footer>
    </>
  )
}

export default App;