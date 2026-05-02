function DashboardHeader({ title }) {
  return (
    <header>
      <h1>Student Dashboard</h1>
      <p>Manage student data and get all details in one place</p>

      <nav>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
      </nav>
    </header>
  );
}

export default DashboardHeader;