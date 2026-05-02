import PropTypes from "prop-types";
StatBadge.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
};

function StatBadge({ label, value }) {
  return (
    <div className="badge">
      {label}: {value}
    </div>
  );
}

export default StatBadge;