import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/search-history");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setHistory(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch error:", error);
      setHistory([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleSearch = async () => {
    if (!inputValue.trim()) {
      alert("Enter a search term");
      return;
    }

    const result = searchService.validateSearch(inputValue);
    if (!result.valid) {
      alert(result.message);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/search-history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ term: inputValue }),
      });

      if (!response.ok) throw new Error("Save failed");

      await fetchHistory();
      setSearch(inputValue);
      navigate("/booklist");
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/search-history/${id}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Delete failed");
      await fetchHistory();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="search-filter">
      <div>
        <input
          type="text"
          placeholder="Search Book..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="filter-input"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && history.length === 0 && <p>No search history found</p>}

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
