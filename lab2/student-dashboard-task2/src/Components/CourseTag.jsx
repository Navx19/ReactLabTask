import PropTypes from "prop-types";

function CourseTag({ courseName, color }) {
  return (
    <span className="tag" style={{ backgroundColor: color } }>
      {courseName}
    </span>
  );
}

CourseTag.propTypes = {
  courseName: PropTypes.string,
  color: PropTypes.string
};

export default CourseTag;
