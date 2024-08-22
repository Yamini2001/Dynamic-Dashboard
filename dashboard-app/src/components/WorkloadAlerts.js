import React from 'react';
import { FaRegChartBar } from 'react-icons/fa'; // Bar chart icon
import './workloadAlert.css';

function WorkloadAlerts() {
  return (
    <div className="alert-card">
      <h4 className="alert-heading">Wordload Alerts</h4>
      <div className="icon-container">
        <FaRegChartBar className="chart-icon" />
      </div>
      <p className="no-data-text">No Graph data available!</p>
    </div>
  );
}

export default WorkloadAlerts;
