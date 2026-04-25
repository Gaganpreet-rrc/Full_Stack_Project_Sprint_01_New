import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
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
  const { isSignedIn } = useUser();

  const [history, setHistory] = useState<SearchFilterType[]>([]);
  const [inputValue, setInputValue] = useState(search);

  // GET history 
  const fetchHistory = async () => {
    try {
      if (!isSignedIn) {
        setHistory([]);
        return;
      }

      const token = await getToken();

      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setHistory(data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [isSignedIn]);

  // SEARCH (create)
  const handleSearch = async () => {
    const result = searchService.validateSearch(inputValue);

    if (!result.valid) {
      alert(result.message);
      return;
    }

    // Guest user 
    if (!isSignedIn) {
      setSearch(inputValue);
      setInputValue("");
      navigate("/booklist");
      return;
    }

    // Logged-in user 
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

  // DELETE history
  const handleRemove = async (id: number) => {
    if (!isSignedIn) return;

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
        {isSignedIn && history.length > 0 && (
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