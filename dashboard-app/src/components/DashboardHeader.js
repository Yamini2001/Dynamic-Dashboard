import React from 'react';
import './DashboardHeader.css';
import {FaRedo, FaEllipsisV, FaClock, FaChevronDown } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import PieChartWithCenterLabel from './Card';
import RiskAssessmentCard from './RiskAssessmentCard';
import CardList from './CardList';
import Alert from './Alert';
import WorkloadAlerts from './WorkloadAlerts'; 
import ImageRisk from './ImageRisk';

const DashboardHeader = () => {
  return (
    <div>
    <div className="dashboard-header">
      <div className="left-side">
        <h2 className="dashboard-title">CNAPP Dashboard</h2>
      </div>
      <div className="right-side">
        <button className="add-widget-btn">
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
      </div>
      <div className="cards-container">
      <PieChartWithCenterLabel />
      <RiskAssessmentCard/>
      <CardList/>
        {/* Add additional card components here */}
      </div>
      <div className="cw-dashboard">
        <h3>CWPP Dashboard:</h3>
        <div className="cards-container">
        <Alert/>
        <WorkloadAlerts />
        <CardList/>
        </div>
      </div>
      <div className="cw-dashboard">
        <h3>Register Scan</h3>
        <div className="cards-container">
        <ImageRisk/>
        <WorkloadAlerts />
        <CardList/>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;