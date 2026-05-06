import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ open, darkMode, onToggleDark, closeSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div
      className={`sidebar 
      ${open ? "sidebar-open" : ""}
      ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}
      `}
    >
      {/* Top */}
      <div className="top-icons">
        <Link to="/" onClick={closeSidebar}><i className="fas fa-home" /></Link>
        <Link to="/users" onClick={closeSidebar}><i className="fas fa-users" /></Link>
        <i className="fas fa-chart-line"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-envelope"></i>
      </div>

      {/* Bottom */}
      <div className="bottom-icons">
        <i
          onClick={onToggleDark}
          className={`fa-solid ${darkMode ? "fa-sun text-warning" : "fa-moon"}`}
        ></i>

        <i
          className="fa-solid fa-right-from-bracket text-danger"
          onClick={handleLogout}
        ></i>
      </div>
    </div>
  );
}