export type Book = {
  id: number;
  title: string;
};
 
let books: Book[] = [];
 
export const booksRepository = {
  getAll(): Book[] {
    return books;
  },
 
  add(book: Book): void {
    books.push(book);
  },
 
  remove(id: number): void {
    books = books.filter(book => book.id !== id);
  },
 
  clear(): void {
    books = [];
  }
};