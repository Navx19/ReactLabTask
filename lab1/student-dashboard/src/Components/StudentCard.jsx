import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";
import PropTypes from "prop-types";

StudentCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  gpa: PropTypes.number,
  major: PropTypes.string
};
function StudentCard({ name, id, avatar, gpa, major, courses }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} width="100"  />

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