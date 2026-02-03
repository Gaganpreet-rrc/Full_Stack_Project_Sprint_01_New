type Book = {
  id: number;
  title: string;
};

export default function BookListPage({
  books,
  search,
}: {
  books: Book[];
  search: string;
}) {
  const searchText = search.trim().toLowerCase();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <h2>Book List</h2>

      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
