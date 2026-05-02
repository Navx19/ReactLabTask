import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [favorites, setFavorites] = useState([]);


  // Inside StudentProvider, add a function to remove students
const removeStudent = (studentId) => {
  setStudents(students.filter((s) => s.id !== studentId));
  // Also remove from favorites if they're there
  setFavorites(favorites.filter((f) => f !== studentId));
};


  const defaultStudents = [
    {
      name: "Naiyer Nur Fairoz",
      id: "101",
      avatar: "/images/cat2.jpg",
      gpa: 3.8,
      major: "Computer Science and Engineering",
      courses: [
        { name: "Math", color: "blue" },
        { name: "AI", color: "green" },
        { name: "Web Development", color: "yellow" },
        { name: "Algorithms", color: "purple" }
      ]
    },
    {
      name: "Kawshik Karmokar",
      id: "102",
      avatar: "/images/cat3.jpg",
      gpa: 3.6,
      major: "BBA",
      courses: [
        { name: "Finance", color: "purple" },
        { name: "Marketing", color: "blue" },
        { name: "Management", color: "green" },
        { name: "Economics", color: "yellow" }
      ]
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
        { name: "Economics", color: "yellow" }
      ]
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
        { name: "Software Engineering", color: "red" }
      ]
    }
  ];

  // Load students from localStorage on mount or use defaults
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    const savedFavorites = localStorage.getItem("favorites");

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    } else {
      setStudents(defaultStudents);
      localStorage.setItem("students", JSON.stringify(defaultStudents));
    }

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    setLoading(false);
  }, []);

  // Save students to localStorage whenever they change
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
         removeStudent,
        loading,
        query,
        setQuery,
        sort,
        setSort,
        favorites,
        setFavorites
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}