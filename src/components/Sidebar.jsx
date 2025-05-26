import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Sidebar.css";

const Sidebar = ({ generalLinks, toolsLinks, bottomLink }) => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between p-3">
      <div>
        <div className="section-title text-muted text-uppercase small mb-2">General</div>
        <ul className="nav flex-column mb-3">
          {generalLinks.map((item, i) => (
            <li key={i} className="nav-item mb-2">
              <Link to={item.path} className="d-flex align-items-center text-decoration-none text-dark">
                <i className={`${item.icon} me-2`}></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="section-title text-muted text-uppercase small mb-2">Tools</div>
        <ul className="nav flex-column">
          {toolsLinks.map((item, i) => (
            <li key={i} className="nav-item mb-2">
              <Link to={item.path} className="d-flex align-items-center text-decoration-none text-dark">
                <i className={`${item.icon} me-2`}></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
    <div className="nav-item mb-5">
         <Link to={bottomLink.path} className="d-flex align-items-center text-decoration-none text-dark">
          <i className={`${bottomLink.icon} me-2`}></i>
          {bottomLink.label}
        </Link>
      </div>
    </div>
        
  );
};

export default Sidebar;
