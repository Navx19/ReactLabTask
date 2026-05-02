function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or major..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;