import { useContext } from "react";
import DashboardHeader from "./Components/DashboardHeader";
import StudentCard from "./Components/StudentCard";
import SearchBar from "./Components/SearchBar";
import SortControls from "./Components/SortControls";
import { ThemeContext } from "./context/themecontext";
import { StudentContext } from "./context/StudentContext";
import AddStudentForm from "./Components/AddStudentForm";
import "./style.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const {
    students,
    loading,
    query,
    sort,
    favorites
  } = useContext(StudentContext);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.major.toLowerCase().includes(query.toLowerCase())
  );

 
  let sortedStudents = [...filteredStudents];

  if (sort === "name") {
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "gpa") {
    sortedStudents.sort((a, b) => b.gpa - a.gpa);
  }

  return (
    <div className={theme}>

      <DashboardHeader favoriteCount={favorites.length} />
      <AddStudentForm />

      {loading ? (
        <div className="loading-spinner">
          <p>Loading students...</p>
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <SearchBar />
          <SortControls />

          {sortedStudents.map((student) => (
            <StudentCard key={student.id} {...student} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;