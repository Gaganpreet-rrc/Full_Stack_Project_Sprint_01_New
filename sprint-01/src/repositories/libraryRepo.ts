export type Book = { id: number; title: string };
export type Tip = { id: number; text: string };
 
let books: Book[] = [
  { id: 1, title: "The Marrow Thieves" },
  { id: 2, title: "Good Habits" },
  { id: 3, title: "Harry Potter" },
];
 
let tips: Tip[] = [
  { id: 1, text: "Keep your books organized." },
  { id: 2, text: "Read at least 15 minutes daily." },
];
 
export const libraryRepository = {
  getBooks() { return books; },
  addBook(book: Book) { books.push(book); },
  removeBook(id: number) { books = books.filter(b => b.id !== id); },
 
  getTips() { return tips; },
  addTip(tip: Tip) { tips.push(tip); },
  removeTip(id: number) { tips = tips.filter(t => t.id !== id); },
};