function DashboardHeader({ title, favoriteCount }) {
  return (
    <header className="header">
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
    </header>
  );
}

export default DashboardHeader;