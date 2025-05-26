import React from "react";
import "../styles/Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header-container d-flex flex-column">
       {/* Mobile Header Row */}
      <div className="mt-3  mobile-header-top d-flex align-items-center justify-content-between w-100 d-md-none px-2 py-1">
        {/* Left: Toggle + Logo */}
       <div className="d-flex align-items-center toggle-logo-group">
  <button className="btn toggle-btn me-2" onClick={onToggleSidebar}>
    <i className="fa fa-bars"></i>
  </button>
  <div className="logo-text logo-compact fw-bold mb-0 ms-5">HC</div>
</div>


        {/* Right: Notification, User Info, Add Button */}
        <div className="d-flex align-items-center">
          <div className="notification-icon me-2">
            <i className="fa fa-bell"></i>
          </div>
          <div className="user-info d-flex align-items-center me-2">
            <img
              src="https://i.pravatar.cc/30"
              alt="avatar"
              className="avatar-img me-1"
            />
            <span className="username">Sejal</span>
          </div>
          <button className="btn btn-primary rounded-circle add-btn">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - only visible on mobile */}
      <div className="mobile-search-bar d-md-none px-2 pb-2">
        <div className="search-wrapper w-100">
          <div className="search-box d-flex align-items-center w-100">
            <i className="fa fa-search search-icon me-2"></i>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Desktop Header Row - visible only on md and up */}
      <div className="d-none d-md-flex align-items-center justify-content-between w-100 px-3 py-2">
        {/* Left: Toggle + Logo */}
        <div className="d-flex align-items-center">
          <div className="logo-text">
            <span className="logo-highlight">Health</span>
            <span className="logo-plain">care.</span>
          </div>
        </div>

        {/* Center: Search Bar + Notification */}
        <div className="search-wrapper d-flex align-items-center flex-grow-1 mx-3 gap-2">
          <div className="position-relative w-100">
            <i className="fa fa-search search-icon-inside"></i>
            <input
              type="text"
              className="form-control search-input ps-5"
              placeholder="Search"
            />
          </div>
          <div className="notification-icon me-3">
            <i className="fa fa-bell"></i>
          </div>
        </div>


        {/* Right:   Profile + Add */}
        <div className="d-flex align-items-center">
          
          <div className="user-info d-flex align-items-center me-3">
            <img
              src="https://i.pravatar.cc/30"
              alt="avatar"
              className="avatar-img me-1"
            />
            <span className="username d-none d-md-inline">Sejal</span>
          </div>
          <button className="btn btn-primary rounded-circle add-btn">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
