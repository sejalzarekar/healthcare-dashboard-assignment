// UpcomingSchedule.jsx
import React from "react";
import { upcomingAppointments } from "../data/appointments.js";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div>
      <h5>The Upcoming Schedule</h5>
      {upcomingAppointments.map((dayGroup, index) => (
        <div key={index}>
          <p className="text-muted">On {dayGroup.day}</p>
          <div className="d-flex gap-2">
            {dayGroup.appointments.map((item, i) => (
              <SimpleAppointmentCard
                key={i}
                title={item.title}
                time={item.time}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule; // ✅ This line was missing!
