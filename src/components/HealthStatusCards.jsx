import React from "react";
import "../styles/HealthStatusCards.css";
import healthData from "../data/healthData";

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthData.map((item, index) => (
        <div className="card p-3 mb-3 health-card shadow-sm" key={index}>
          <div className="d-flex align-items-center mb-2">
            <span className="emoji-icon me-2">{item.icon}</span>
            <h6 className="mb-0">{item.title}</h6>
          </div>
          <p className="date-text mb-2">{item.date}</p>
          <div className="progress" style={{ height: "6px" }}>
            <div
              className={`progress-bar bg-${item.color}`}
              role="progressbar"
              style={{ width: `${item.progress}%` }}
              aria-valuenow={item.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
