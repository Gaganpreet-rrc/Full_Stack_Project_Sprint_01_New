import "./bookList.css";

function BookList() {
  const books = [
    "The Marrow Thieves",
    "Good Habits",
    "Harry Potter",
    "Rich Dad Poor Dad",
    "Cinderella",
  ];

  return (
    <section className="book-list">
      <h2>Available Books in Library</h2>

      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
