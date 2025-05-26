import React from "react";
import "../styles/CalendarView.css";
import { days, dates, timesByDate, appointmentCards } from "../data/calendarData";

const CalendarView = () => {
  return (
    <div className="calendar-view container-fluid px-3 py-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h5 className="mb-0">October 2021</h5>
        <div>
          <i className="fas fa-chevron-left me-3"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>

      {/* Day Labels */}
      <div className="row text-center mb-2">
        {days.map((day, idx) => (
          <div className="col calendar-day-label" key={idx}>
            {day}
          </div>
        ))}
      </div>

      {/* Dates + Times */}
      <div className="row text-center calendar-grid mb-4 gx-1">
        {dates.map((date, idx) => (
          <div className="col calendar-date-cell" key={idx}>
            <div className={`calendar-date ${date === 26 ? "selected" : ""}`}>
              {date}
            </div>
            {timesByDate[date]?.map((time, index) => (
              <div
                key={index}
                className={`calendar-time ${
                  date === 26 && time === "09:00" ? "highlighted-time" : ""
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="row appointment-cards mx-1 gy-3">
        {appointmentCards.map((card, idx) => (
          <div className="col-12 col-sm-6 col-md-5" key={idx}>
            <div className={`appointment-card ${card.className}`}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span>{card.title}</span>
                <span role="img" aria-label="icon">{card.icon}</span>
              </div>
              <small className="text-muted">{card.time}</small>
              <p className="mb-0">{card.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
