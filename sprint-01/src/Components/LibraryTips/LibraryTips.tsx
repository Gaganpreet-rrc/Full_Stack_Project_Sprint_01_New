import "./LibraryTips.css";

export default function LibraryTips() {
  const tips = [
    { id: 1, text: "Keep your books organized so you can find them easily." },
    { id: 2, text: "Read at least 15 minutes every day to build a habit." },
    { id: 3, text: "Return borrowed books on time to avoid late fees." },
    { id: 4, text: "Check the table of contents first to understand the book quickly." },
    { id: 5, text: "Use headphones when watching videos or doing digital work in the library." }
  ];

  return (
    <section className="library-tips-section">
      <h2 className="library-tips-title">Library Tips</h2>

      <ul className="library-tips-list">
        {tips.map((tip) => (
          <li key={tip.id} className="library-tip-item">
            {tip.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
