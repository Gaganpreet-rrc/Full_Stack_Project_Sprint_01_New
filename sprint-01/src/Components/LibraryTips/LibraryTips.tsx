import { useState } from "react";
import "./LibraryTips.css";
import { useLibraryTips } from "../../hooks/useLibraryTips";

export default function LibraryTips() {
  const { tips, error, addTip, removeTip } = useLibraryTips();
  const [newTip, setNewTip] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTip(newTip);
    setNewTip("");
  }

  return (
    <section className="library-tips-section">
      <h2 className="library-tips-title">Library Tips</h2>

      <form onSubmit={onSubmit} className="library-tips-form">
        <input
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="Write a tip..."
        />
        <button type="submit">Add</button>
      </form>

      {error && <p className="library-tips-error">{error}</p>}

      <ul className="library-tips-list">
        {tips.map((tip) => (
          <li key={tip.id} className="library-tip-item">
            <span>{tip.text}</span>
            <button onClick={() => removeTip(tip.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
