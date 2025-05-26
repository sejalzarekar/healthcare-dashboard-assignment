import React from "react";
import "../styles/ActivityFeed.css";

const activityData = [
  ["cyan"],                     // Monday
  ["cyan", "purple", "gray"],   // Tuesday
  ["purple", "gray"],           // Wednesday
  ["gray", "cyan"],             // Thursday
  ["cyan", "purple", "gray"],   // Friday
  ["gray", "cyan"],             // Saturday
  ["cyan", "purple"],           // Sunday
];

const dayNames = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const ActivityFeed = () => {
  return (
    <div className="container my-4">
      <div className="activity-card p-4 rounded shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h6 className="fw-bold m-0">Activity</h6>
          <span className="text-muted small">3 appointments on this week</span>
        </div>

        <div className="d-flex justify-content-between align-items-end activity-bars">
          {activityData.map((bars, index) => (
            <div key={index} className="text-center">
              <div className="bar-group d-flex flex-column align-items-center gap-1 justify-content-end">
                {bars.map((color, idx) => (
                  <div key={idx} className={`bar ${color}-bar bar-${index + 1}-${idx + 1}`}></div>
                ))}
              </div>
              <div className="day-label mt-2 text-muted small">{dayNames[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
