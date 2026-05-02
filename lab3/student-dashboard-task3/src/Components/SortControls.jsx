import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function SortControls() {
  const { setSort } = useContext(StudentContext);
  
  return (
    <div>
      <button onClick={() => setSort("default")}>Default</button>
      <button onClick={() => setSort("name")}>Name A-Z</button>
      <button onClick={() => setSort("gpa")}>GPA High-Low</button>
    </div>
  );
}

export default SortControls;