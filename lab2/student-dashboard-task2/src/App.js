import { useState, useEffect } from "react";
import DashboardHeader from "./Components/DashboardHeader";
import StudentCard from "./Components/StudentCard";
import SearchBar from "./Components/SearchBar";
import SortControls from "./Components/SortControls";
import "./style.css";

function App() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sort, setSort] = useState("default");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = () => {
      setTimeout(() => {
        const studentsData = [
          {
            name: "Naiyer Nur Fairoz",
            id: "101",
            avatar: "/images/cat2.jpg",
            gpa: 3.88,
            major: "Computer Science and Engineering",
            courses: [
              { name: "Math", color: "blue" },
              { name: "AI", color: "green" },
              { name: "Web Development", color: "yellow" },
              { name: "Algorithms", color: "purple" },
            ],
          },
          {
            name: "Kawshik Karmokar",
            id: "102",
            avatar: "/images/cat3.jpg",
            gpa: 3.6,
            major: "Electrical Engineering",
            courses: [
              { name: "Physics", color: "orange" },
              { name: "Circuits", color: "red" },
              { name: "Signal Processing", color: "cyan" },
              { name: "Control Systems", color: "magenta" },
            ],
          },
          {
            name: "Md Ishtiak Ahamed",
            id: "103",
            avatar: "/images/cat4.jpg",
            gpa: 3.96,
            major: "BBA",
            courses: [
              { name: "Finance", color: "purple" },
              { name: "Marketing", color: "blue" },
              { name: "Management", color: "green" },
              { name: "Economics", color: "yellow" },
            ],
          },
          {
            name: "Rafid Ul Amin",
            id: "104",
            avatar: "/images/animal-cat-adorable-20787.jpg",
            gpa: 3.6,
            major: "Computer Science and Engineering",
            courses: [
              { name: "DBMS", color: "cyan" },
              { name: "Operating Systems", color: "magenta" },
              { name: "Computer Networks", color: "orange" },
              { name: "Software Engineering", color: "red" },
            ],
          },
        ];
        setStudents(studentsData);
        setLoading(false);
      }, 1500); // 1.5 second delay
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.major.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents]);

  let sortedStudents = [...filteredStudents];

  if (sort === "name") {
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "gpa") {
    sortedStudents.sort((a, b) => b.gpa - a.gpa);
  }

  return (
    <div>
      <DashboardHeader favoriteCount={favorites.length} />
      
      {loading ? (
        <div className="loading-spinner">
          <p>Loading students...</p>
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <SearchBar query={query} setQuery={setQuery} />
          <SortControls setSort={setSort} />
          {sortedStudents.map((student) => (
            <StudentCard
              key={student.id}
              {...student}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;