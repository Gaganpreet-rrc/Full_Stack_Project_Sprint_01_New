import React from "react";
import SearchFilter from "../searchFilter/Searchfilter";

type BookListProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const BookList = ({ search, setSearch }: BookListProps) => {
  const books = [
    "The Marrow Thieves",
    "Good Habits",
    "Harry Potter",
    "Rich Dad Poor Dad",
    "Cinderella"
  ];

  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <section className="book-list">
      <h2>Available Books in Library</h2>

      <SearchFilter search={search} setSearch={setSearch} />

      <div>
        {filteredBooks.map((book, index) => (
          <p key={index}>{book}</p>
        ))}
      </div>
    </section>
  );
};

export default BookList;
