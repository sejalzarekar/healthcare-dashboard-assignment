import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/Layout.css";
import { generalLinks, toolsLinks, bottomLink } from "./data/navigationLinks";
import DashboardMainContent from "./components/DashboardMainContent";

// Dummy Pages
const Appointments = () => <h2>Appointments Page</h2>;
const History = () => <h2>History Page</h2>;
const Calendar = () => <h2>Calendar Page</h2>;
const Statistics = () => <h2>Statistics Page</h2>;
const Tests = () => <h2>Tests Page</h2>;
const Chat = () => <h2>Chat Page</h2>;
const Support = () => <h2>Support Page</h2>;
const Setting = () => <h2>Setting Page</h2>;


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Header onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

        <div className="main-content">
          <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
            <Sidebar
              generalLinks={generalLinks}
              toolsLinks={toolsLinks}
              bottomLink={bottomLink}
            />
          </div>

          <div className="dashboard-content">
            <Routes>
              <Route path="/" element={<DashboardMainContent />} />
              <Route path="/history" element={<History />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/support" element={<Support />} />
              <Route path="/setting" element={<Setting />} />

          
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
