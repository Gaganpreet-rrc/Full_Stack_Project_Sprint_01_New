import type { SearchFilter } from "../types/SearchFilter";
import { testSearchFilterData } from "../data/testSearchFilterData";

// Initialize with test data
let searchHistory: SearchFilter[] = [...testSearchFilterData];

export const searchFilterRepo = {

  // ADD
  add(term: string) {
    const newSearch: SearchFilter = {
      id: searchHistory.length + 1,
      term: term
    };
    searchHistory.push(newSearch);
    return newSearch;
  },

  // GET ALL
  getAll() {
    return searchHistory;
  },

  // GET BY ID
  getById(id: number) {
    return searchHistory.find(item => item.id === id);
  },

  // UPDATE
  update(id: number, updated: Partial<SearchFilter>) {
    const index = searchHistory.findIndex(item => item.id === id);
    if (index === -1) return null;
    searchHistory[index] = { ...searchHistory[index], ...updated };
    return searchHistory[index];
  },

  // DELETE
  remove(id: number) {
  const item = searchHistory.find(item => item.id === id);
  if (!item) return null;
  searchHistory = searchHistory.filter(i => i.id !== id);
  return item;
}
};