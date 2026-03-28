import { useState, useEffect } from "react";
import { searchFilterRepo } from "../repositories/searchFilterRepo";
import { searchService } from "../services/searchfilterService";
import type { SearchFilter as SearchFilterType } from "./../types/SearchFilter";
import { useNavigate } from "react-router-dom";

/**
 * useSearchFilter Hook
 * This hook helps the SearchFilter component work.
 * 
 * - Keeps track of what the user types in the search box.
 * - Checks if the input is valid using `searchService`.
 * - Keeps a list of past searches using `searchFilterRepo`.
 * - Lets the component do a search or remove items from history.
 * -Handles navigation to the book list page after a search.
 * 
 */
export const useSearchFilter = (initialSearch: string) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(initialSearch);
  const [history, setHistory] = useState<SearchFilterType[]>([]);

  useEffect(() => {
    setHistory(searchFilterRepo.getAll());
  }, []);

  const handleSearch = () => {
    const result = searchService.validateSearch(inputValue);

    if (!result.valid) {
      alert(result.message);
      return;
    }

    const exists = history.some((item) => item.term === inputValue);

    if (!exists) {
      searchFilterRepo.add(inputValue);
      setHistory(searchFilterRepo.getAll());
    }

    navigate("/booklist");
  };

  const handleRemove = (id: number) => {
    searchFilterRepo.remove(id);
    setHistory(searchFilterRepo.getAll());
  };

  return {
    inputValue,
    setInputValue,
    history,
    handleSearch,
    handleRemove,
  };
};