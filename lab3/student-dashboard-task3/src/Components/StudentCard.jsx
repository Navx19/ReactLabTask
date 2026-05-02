import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";
import PropTypes from "prop-types";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentCard({ name, id, avatar, gpa, major, courses }) {
  const { favorites, setFavorites, removeStudent } = useContext(StudentContext);
  const isFav = favorites.includes(id);

  const toggleFav = () => {
    if (isFav) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleRemove = () => {
  if (window.confirm(`Are you sure you want to remove ${name}?`)) {
    removeStudent(id);
  }
};

  return (
    <div className="card">
      <div className="card-buttons">
        <button 
          onClick={toggleFav}
          className={`favorite-btn ${isFav ? 'favorited' : ''}`}
        >
          {isFav ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>

        <button 
          onClick={handleRemove}
          className="remove-btn"
        >
          Remove Student
        </button>
      </div>
      
      <img src={avatar} alt={name} width="100" />

      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Major: {major}</p>

      <StatBadge label="GPA" value={gpa} />

      <div>
        {courses.map((course, index) => (
          <CourseTag
            key={index}
            courseName={course.name}
            color={course.color}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentCard;