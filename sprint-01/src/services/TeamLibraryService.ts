import type { LibraryBook } from "../types/LibraryBook";

export const TeamService = {

  isValidTitle(title: string): boolean {
    return title.trim().length > 0;
  },

  createBook(title: string): Omit<LibraryBook, "id"> {
    return {
      title: title.trim(),
      author: "Unknown",
      available: true
    };
  },

  searchByTitle(books: LibraryBook[], searchText: string): LibraryBook[] {
    return books.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
  },

  getAvailableBooks(books: LibraryBook[]): LibraryBook[] {
    return books.filter(book => book.available);
  },

  countBorrowedBooks(books: LibraryBook[]): number {
    return books.filter(book => !book.available).length;
  }

};