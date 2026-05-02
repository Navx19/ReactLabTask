import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function SearchBar() {
  const { query, setQuery } = useContext(StudentContext);
  
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