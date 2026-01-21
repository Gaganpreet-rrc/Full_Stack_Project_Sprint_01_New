import Login from "./components/login/login";
import './App.css';
import SearchFilter from './components/searchFilter/Searchfilter';
import LibraryTips from './Components/LibraryTips/LibraryTips';
import BookList from './components/BookList/bookList';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Library Management App</h1>
      </header>

      <Login />
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
