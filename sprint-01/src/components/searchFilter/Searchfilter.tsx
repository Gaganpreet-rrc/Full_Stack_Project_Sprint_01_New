export default function SearchFilter({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <form
      className="search-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Enter a word, phrase, or acronym..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}