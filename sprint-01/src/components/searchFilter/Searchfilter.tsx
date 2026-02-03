import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchFilter({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const [history, setHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(search);

  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearch = () => {
    if (inputValue && !history.includes(inputValue)) {
      setHistory([...history, inputValue]); 
    }
    setSearch(inputValue); 
    navigate("/booklist"); 
  };

  const handleRemove = (term: string) => {
    setHistory(history.filter((item) => item !== term));
  };

  return (
    <div className="search-filter">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        style={{ marginBottom: "10px" }}
      >
        <input
          type="text"
          placeholder="Enter a word, phrase, or acronym..."
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          className="filter-panel"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {history.length > 0 && (
        <ul className="history-list">
          {history.map((term, index) => (
            <li key={index}>
              {term}{" "}
              <button
                type="button"
                onClick={() => handleRemove(term)}
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
