import './App.css';
import SearchFilter from './components/SearchFilter/SearchFilter';
import LibraryTips from './components/LibraryTips/LibraryTips';
import BookList from './components/BookList/bookList';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Library Management App</h1>
      </header>

      <SearchFilter />
      <BookList />
      <LibraryTips />

      <footer>
        <p>
          Gaganpreet Kaur, Harmanpreet Kaur, Manjot Kaur, Parneet Kaur
        </p>
      </footer>
    </div>
  );
}

export default App;
