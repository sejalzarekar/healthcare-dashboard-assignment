import React from "react";
import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="appointment-card shadow-sm p-3 rounded d-flex flex-column align-items-start">
      <div className="appointment-title mb-2">
        {title} <span className="icon ms-1">{icon}</span>
      </div>
      <div className="appointment-time text-muted">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
