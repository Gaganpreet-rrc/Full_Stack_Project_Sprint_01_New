import type { Book } from "./../types/Book";
import { testBookData } from "../data/testBookData";

// initialize with test data
let bookList: Book[] = [...testBookData];

export const bookListRepo = {
  // ADD
  add(book: Omit<Book, "id">) {
    const newBook = { id: bookList.length + 1, ...book };
    bookList.push(newBook);
    return newBook;
  },

  // GET ALL
  getAll() {
    return bookList;
  },

  getById(id: number) {
    return bookList.find(book => book.id === id);
  },

  // UPDATE
  update(id: number, updated: Partial<Book>) {
    const index = bookList.findIndex(book => book.id === id);
    if (index === -1) return null;
    bookList[index] = { ...bookList[index], ...updated };
    return bookList[index];
  },

  // DELETE
  remove(id: number) {
    bookList = bookList.filter(book => book.id !== id);
  }
};
