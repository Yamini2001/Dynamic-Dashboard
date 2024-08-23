import React, { useState } from 'react';
import './DashboardHeader.css';
import { FaRedo, FaEllipsisV, FaClock, FaChevronDown } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import WidgetModal from './WidgetModal';
import PieChartWithCenterLabel from './Card';
import RiskAssessmentCard from './RiskAssessmentCard';
import CardList from './CardList';
import Alert from './Alert';
import WorkloadAlerts from './WorkloadAlerts'; 
import ImageRisk from './ImageRisk';
import SecurityScan from './SecurityScan';

const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize with default components for each section
  const [cspmWidgets, setCspmWidgets] = useState([
    <PieChartWithCenterLabel key="cloud-accounts" />,
    <RiskAssessmentCard key="risk-assessment" />,
    <CardList key = "Add Widget" />
  ]);

  const [cwppWidgets, setCwppWidgets] = useState([
    <Alert key="namespace-alerts" />,
    <WorkloadAlerts key="workload-alerts" />,
    <CardList key = "Add Widget" />
  ]);

  const [imageWidgets, setImageWidgets] = useState([
    <ImageRisk key="image-vulnerability" />,
    <SecurityScan key="security-scan" />, // Replace with the correct component if different
    <CardList key = "Add Widget" />
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmWidgets = (selectedWidgets) => {
    selectedWidgets.forEach(widgetName => {
      if (widgetName === 'Cloud Accounts') setCspmWidgets([...cspmWidgets, <PieChartWithCenterLabel key="new-cloud-accounts" />]);
      if (widgetName === 'Risk Assessment') setCspmWidgets([...cspmWidgets, <RiskAssessmentCard key="new-risk-assessment" />]);
      if (widgetName === 'Top 5 Namespace Specific Alerts') setCwppWidgets([...cwppWidgets, <Alert key="new-namespace-alerts" />]);
      if (widgetName === 'Workload Alerts') setCwppWidgets([...cwppWidgets, <WorkloadAlerts key="new-workload-alerts" />]);
      if (widgetName === 'Image Vulnerability') setImageWidgets([...imageWidgets, <ImageRisk key="new-image-vulnerability" />]);
      if (widgetName === 'Security Scan') setImageWidgets([...imageWidgets, <WorkloadAlerts key="new-security-scan" />]); // Replace with the correct component if different
    });
  };

  const widgetOptions = [
    'Cloud Accounts', 
    'Risk Assessment', 
    'Top 5 Namespace Specific Alerts', 
    'Workload Alerts', 
    'Image Vulnerability', 
    'Security Scan'
  ];

  return (
    <div>
      <div className="dashboard-header">
        <div className="left-side">
          <h2 className="dashboard-title">CNAPP Dashboard</h2>
        </div>
        <div className="right-side">
          <button className="add-widget-btn" onClick={handleOpenModal}>
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
          {cspmWidgets}
        </div>
      </div>
      
      <div className="cw-dashboard">
        <h3>CWPP Dashboard:</h3>
        <div className="cards-container">
          {cwppWidgets}
        </div>
      </div>
      
      <div className="cw-dashboard">
        <h3>Register Scan</h3>
        <div className="cards-container">
          {imageWidgets}
        </div>
      </div>

      <WidgetModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmWidgets}
        widgetOptions={widgetOptions}
      />
    </div>
  );
};

export default DashboardHeader;
