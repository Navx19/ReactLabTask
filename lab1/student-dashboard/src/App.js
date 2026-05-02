import { useState, useEffect } from "react";
import DashboardHeader from "./Components/DashboardHeader";
import StudentCard from "./Components/StudentCard";
import "./style.css";

function App() {
  const [students, setStudents] = useState([]);
   const [loading, setLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {
      
      setStudents([
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
          major: "Electrical Engineering",
          courses: [
            { name: "Physics", color: "orange" },
            { name: "Circuits", color: "red" },
            { name: "Signal Processing", color: "cyan" },
            { name: "Control Systems", color: "magenta" }
          ]
        },
        {
          name: "Md Ishtiak Ahamed",
          id: "103",
          avatar:"/images/cat4.jpg",
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
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <DashboardHeader />

      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
}

export default App;
