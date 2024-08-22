import React, { useState } from 'react';
import './DashboardHeader.css';
import { FaRedo, FaEllipsisV, FaClock, FaChevronDown } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import PieChartWithCenterLabel from './Card';
import RiskAssessmentCard from './RiskAssessmentCard';
import CardList from './CardList';
import Alert from './Alert';
import WorkloadAlerts from './WorkloadAlerts'; 
import ImageRisk from './ImageRisk';

const DashboardHeader = () => {
  const [widgets, setWidgets] = useState({
    CSPM: [
      { id: 1, component: <PieChartWithCenterLabel key="pie" /> },
      { id: 2, component: <RiskAssessmentCard key="risk" /> }
    ],
    CWPP: [
      { id: 3, component: <Alert key="alert" /> },
      { id: 4, component: <WorkloadAlerts key="workload" /> }
    ],
    RegisterScan: [
      { id: 5, component: <ImageRisk key="imageRisk" /> },
      { id: 6, component: <WorkloadAlerts key="workload2" /> }
    ]
  });

  const addWidget = (category) => {
    const newWidget = {
      id: Date.now(), // Unique ID
      component: <CardList key={Date.now()} />
    };
    setWidgets({
      ...widgets,
      [category]: [...widgets[category], newWidget]
    });
  };

  const removeWidget = (category, widgetId) => {
    setWidgets({
      ...widgets,
      [category]: widgets[category].filter(widget => widget.id !== widgetId)
    });
  };

  return (
    <div>
      <div className="dashboard-header">
        <div className="left-side">
          <h2 className="dashboard-title">CNAPP Dashboard</h2>
        </div>
        <div className="right-side">
          <button className="add-widget-btn" onClick={() => addWidget('CSPM')}>
            Add Widget
            <GoPlus className="add-widget-icon" />
          </button>
          <button className="icon-btn reset-icon-btn">
            <FaRedo className="reset-icon" />
          </button>
          <button className="icon-btn">
            <FaEllipsisV className="ellipsis-icon" />
          </button>
          <button className="time-range-btn">
            <FaClock className="clock-icon" />
            <span className="separator-line"></span>
            <span className="time-range-text">Last 2 days</span>
            <FaChevronDown className="dropdown-icon" />
          </button>
        </div>
      </div>

      <div className="executive-dashboard-header">
        <h3>CSPM Executive Dashboard</h3>
        <div className="cards-container">
          {widgets.CSPM.map(widget => (
            <div key={widget.id} className="widget-container">
              {widget.component}
              <button onClick={() => removeWidget('CSPM', widget.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cw-dashboard">
        <h3>CWPP Dashboard</h3>
        <div className="cards-container">
          {widgets.CWPP.map(widget => (
            <div key={widget.id} className="widget-container">
              {widget.component}
              <button onClick={() => removeWidget('CWPP', widget.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cw-dashboard">
        <h3>Register Scan</h3>
        <div className="cards-container">
          {widgets.RegisterScan.map(widget => (
            <div key={widget.id} className="widget-container">
              {widget.component}
              <button onClick={() => removeWidget('RegisterScan', widget.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
