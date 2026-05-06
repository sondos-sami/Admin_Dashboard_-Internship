import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  return (
    <div className="header-container">

      {/* LEFT */}
      <div className="header-left">
        <h5 className="fw-bold mb-1">
          Welcome Back Ameerah Howard
        </h5>
        <span className="sub-text">
          You have 3 unread notifications
        </span>
      </div>

      {/* RIGHT */}
      <div className="header-right">

        {/* SEARCH */}
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>

        {/* DATE */}
        <input type="date" className="date-box" />

        {/* BUTTON */}
        <button className="export-btn">
          Export
        </button>

      </div>
    </div>
  );
}