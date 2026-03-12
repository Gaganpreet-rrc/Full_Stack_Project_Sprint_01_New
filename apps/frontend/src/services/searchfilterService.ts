export const searchService = {
  validateSearch(term: string) {
    if (!term.trim()) {
      return { valid: false, message: "Search cannot be empty" };
    }
 
    if (term.length < 2) {
      return { valid: false, message: "Search must be at least 2 characters" };
    }
 
    return { valid: true };
  },
 
  filterBooks(books: any[], term: string) {
    return books.filter(book =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
  }
};