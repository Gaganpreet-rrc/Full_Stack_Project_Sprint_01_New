import { useLibraryContext } from "../../context/LibraryContext";
import { BookList } from "../BookList/bookList";

type Props = { search: string };

export default function BookListPage({ search }: Props) {
  const { books, addBook, removeBook } = useLibraryContext();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Library Books</h1>
      <BookList 
        books={filteredBooks} 
        addBook={addBook} 
        removeBook={removeBook} 
      />
    </div>
  );
}