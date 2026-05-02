import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
function DashboardHeader({ title, favoriteCount }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <h1>Student Dashboard</h1>
      <p>Manage student data and get all details in one place</p>
      
      <div className="favorites-info">
        ❤️ {favoriteCount} Favorite{favoriteCount !== 1 ? 's' : ''}
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
      </nav>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}

export default DashboardHeader;