import React from 'react';
import { AiOutlineBarChart } from "react-icons/ai"; // Bar chart icon
import './Alert.css';

function WorkloadAlerts() {
  return (
    <div className="alert-card">
      <h4 className="alert-heading">Top 5 Namespace Specific Workload Alerts</h4>
      <div className="icon-container">
        <AiOutlineBarChart className="chart-icon" />
      </div>
      <p className="no-data-text">No Graph data available!</p>
    </div>
  );
}

export default WorkloadAlerts;
