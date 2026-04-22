import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import type { SearchFilter as SearchFilterType } from "../../types/SearchFilter";
import { searchService } from "../../services/searchfilterService";

const API_URL = "http://localhost:3000/search-history";

export default function SearchFilter({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [history, setHistory] = useState<SearchFilterType[]>([]);
  const [inputValue, setInputValue] = useState(search);

  // GET history
  const fetchHistory = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setHistory(data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // CREATE search 
  const handleSearch = async () => {
    const result = searchService.validateSearch(inputValue);

    if (!result.valid) {
      alert(result.message);
      return;
    }

    try {
      const token = await getToken();

      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ term: inputValue }),
      });

      await fetchHistory();
    } catch (error) {
      console.error("Save error:", error);
    }

    setSearch(inputValue);
    setInputValue("");
    navigate("/booklist");
  };

  // DELETE 
  const handleRemove = async (id: number) => {
    try {
      const token = await getToken();

      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      await fetchHistory();
    } catch (error) {
      console.error("Delete error:", error);
    }
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

      <div className="history-container">
        {history.length > 0 && (
          <ul className="history-list">
            {history.map((item) => (
              <li key={item.id} className="history-item">
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
    </div>
  );
}