import React from "react";
import "../styles/DashboardMainContent.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main container-fluid">
      {/* Dashboard Overview */}
      <div className="row">
        <div className="col-12">
          <h2 className="dashboard-title">Dashboard</h2>
        </div>
      </div>

      {/* Anatomy Section & Health Cards */}
      <div className="row mt-3">
        <div className="col-md-4 ">
        <AnatomySection />
        </div>  
        <div className="col-md-2">
          <HealthStatusCards />
        </div>
        <div className="col-6">
          <CalendarView />
        </div>
         
      </div>


    <div className="d-flex flex-wrap justify-content-between flex-container">

      {/* Activity Feed */}
      <div className="col-md-6 mb-1">
        <ActivityFeed />
      </div>
      {/* Upcoming Schedule */}
      <div className="col-md-4 me-md-5 mb-1">
        <UpcomingSchedule />
      </div>
    </div>

    </div>
  );
};

export default DashboardMainContent;
