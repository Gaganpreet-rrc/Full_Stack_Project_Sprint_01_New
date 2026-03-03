import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchFilterRepo } from "../../repositories/searchFilterRepo";
import type { SearchFilter as SearchFilterType } from "../../types/SearchFilter";
import { searchService } from "../../services/searchfilterService";

export default function SearchFilter({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {

  const navigate = useNavigate();

  const [history, setHistory] = useState<SearchFilterType[]>([]);
  const [inputValue, setInputValue] = useState(search);

  useEffect(() => {
    setHistory(searchFilterRepo.getAll());
  }, []);

  const handleSearch = () => {
    const result = searchService.validateSearch(inputValue);

    if (!result.valid) {
      alert(result.message);
      return;
    }
    
    const exists = history.some(item => item.term === inputValue);

    if (!exists) {
      searchFilterRepo.add(inputValue);
      setHistory(searchFilterRepo.getAll());
    }

    setSearch(inputValue);
    navigate("/booklist");
  };

  const handleRemove = (id: number) => {
    searchFilterRepo.remove(id);
    setHistory(searchFilterRepo.getAll());
  };

  return (
    <div className="search-filter">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Search Book..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="filter-input"
        />

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {history.length > 0 && (
        <ul className="history-list">
          {history.map((item) => (
            <li key={item.id}>
              {item.term}
              <button
                onClick={() => handleRemove(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}