import { useState, useEffect } from "react";
 import Sidebar from "./navbar/sidebar"
 import Navbar from "./navbar/topNavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="layout">
      
   
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}></div>
      )}

      <Sidebar
        open={open}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
        closeSidebar={() => setOpen(false)}
      />

      <div className="main">
        <Navbar toggleSidebar={() => setOpen(true)} />
        <div className="content p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}