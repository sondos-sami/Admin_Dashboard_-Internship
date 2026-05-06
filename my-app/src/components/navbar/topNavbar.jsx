export default function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar-custom">

      {/* 🔥 يظهر في الموبايل بس */}
      <button
        className="menu-btn"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <h5>Sugarpanel</h5>

      <div className="nav-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-bell"></i>
      </div>
    </div>
  );
}