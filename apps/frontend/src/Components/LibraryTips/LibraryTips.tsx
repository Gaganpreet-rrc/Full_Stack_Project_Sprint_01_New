import { useState } from "react";
import "./LibraryTips.css";
import { useLibraryTips } from "../../hooks/useLibraryTips";
import { useUser } from "@clerk/clerk-react";

export default function LibraryTips() {
  const { tips = [], error, addTip, removeTip } = useLibraryTips(); 
  const [newTip, setNewTip] = useState("");
  const { user, isLoaded } = useUser();

  
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newTip.trim()) return;
    addTip(newTip);
    setNewTip("");
  }

  return (
    <section className="library-tips-section">
      <h2 className="library-tips-title">Library Tips</h2>

      {user ? (
        <form onSubmit={onSubmit} className="library-tips-form">
          <input
            value={newTip}
            onChange={(e) => setNewTip(e.target.value)}
            placeholder="Write a tip..."
          />
          <button type="submit">Add</button>
        </form>
      ) : (
        <p>Please sign in to add tips</p>
      )}

      {error && <p className="library-tips-error">{error}</p>}

      <ul className="library-tips-list">
        {tips.length === 0 ? (
          <p>No tips yet</p>
        ) : (
          tips.map((tip) => (
            <li key={tip.id} className="library-tip-item">
              <span>{tip.title}</span>

              {user && (
                <button onClick={() => removeTip(tip.id)}>Remove</button>
              )}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}