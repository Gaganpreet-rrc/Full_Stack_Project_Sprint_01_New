import { useState } from "react";
import "./LibraryTips.css";

type Tip = {
  id: number;
  text: string;
};

export default function LibraryTips() {
  const [tips, setTips] = useState<Tip[]>([
    { id: 1, text: "Keep your books organized so you can find them easily." },
    { id: 2, text: "Read at least 15 minutes every day to build a habit." },
    { id: 3, text: "Return borrowed books on time to avoid late fees." },
    { id: 4, text: "Check the table of contents first to understand the book quickly." },
    { id: 5, text: "Use headphones when watching videos or doing digital work in library." }
  ]);

  const [newTip, setNewTip] = useState("");
  const [error, setError] = useState("");

  function addTip(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = newTip.trim();

    // Validation (I.2)
    if (trimmed.length < 5) {
      setError("Tip must be at least 5 characters.");
      return;
    }

    setError("");

    const nextId = tips.length ? Math.max(...tips.map((t) => t.id)) + 1 : 1;

    setTips((prev) => [...prev, { id: nextId, text: trimmed }]);
    setNewTip("");
  }

  function removeTip(id: number) {
    setTips((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <section className="library-tips-section">
      <h2 className="library-tips-title">Library Tips</h2>

      {/* I.2 Form Component */}
      <form onSubmit={addTip} className="library-tips-form">
        <input
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="Write a tip..."
        />
        <button type="submit">Add</button>
      </form>

      {error && <p className="library-tips-error">{error}</p>}

      {/* I.3 List + Remove */}
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
