import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Box, Tabs, Tab, Checkbox, FormControlLabel } from '@mui/material';
import './WidgetModal.css';

const WidgetModal = ({ isOpen, onClose, onConfirm, widgetOptions }) => {
  const [value, setValue] = useState(0);
  const [checkedWidgets, setCheckedWidgets] = useState({
    'Cloud Accounts': false,
    'Cloud Risk Assessment': false,
    'Top 5 Namespace Specific Alerts': false,
    'Workload Alerts': false,
    'Image Risk Assessment': false,
    'Security Scan': false,
    'Ticket': false,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (event) => {
    setCheckedWidgets({
      ...checkedWidgets,
      [event.target.name]: event.target.checked,
    });
  };

  const handleConfirm = () => {
    const selectedWidgets = Object.keys(checkedWidgets).filter(
      (widget) => checkedWidgets[widget]
    );
    onConfirm(selectedWidgets);
  };

  const handleCancel = () => {
    onClose();
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return (
          <>
            <div className="widget-item bordered">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Cloud Accounts']} onChange={handleCheckboxChange} name="Cloud Accounts" />}
                label="Cloud Accounts"
              />
              {checkedWidgets['Cloud Accounts']}
            </div>
            <div className="widget-item bordered">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Cloud Risk Assessment']} onChange={handleCheckboxChange} name="Cloud Risk Assessment" />}
                label="Cloud Risk Assessment"
              />
              {checkedWidgets['Cloud Risk Assessment']}
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="widget-item">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Top 5 Namespace Specific Alerts']} onChange={handleCheckboxChange} name="Top 5 Namespace Specific Alerts" />}
                label="Top 5 Namespace Specific Alerts"
              />
              {checkedWidgets['Top 5 Namespace Specific Alerts']}
            </div>
            <div className="widget-item">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Workload Alerts']} onChange={handleCheckboxChange} name="Workload Alerts" />}
                label="Workload Alerts"
              />
              {checkedWidgets['Workload Alerts']}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="widget-item">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Image Risk Assessment']} onChange={handleCheckboxChange} name="Image Risk Assessment" />}
                label="Image Risk Assessment"
              />
              {checkedWidgets['Image Risk Assessment']}
            </div>
            <div className="widget-item">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Security Scan']} onChange={handleCheckboxChange} name="Security Scan" />}
                label="Security Scan"
              />
              {checkedWidgets['Security Scan']}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="widget-item">
              <FormControlLabel
                control={<Checkbox checked={checkedWidgets['Ticket']} onChange={handleCheckboxChange} name="Ticket" />}
                label="Ticket"
              />
              {checkedWidgets['Ticket']}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="app-bar1">
      <div className="widget-modal">
        <div className="modal-header">
          <h2>Add Widget</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <p>Personalize your dashboard by adding the following widget</p>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white' }}>
          <Tabs value={value} onChange={handleChange} aria-label="widget tabs" sx={{ color: 'navy' }}>
            <Tab label="CSPM" />
            <Tab label="CWPP" />
            <Tab label="Image" />
            <Tab label="Ticket" />
          </Tabs>
        </Box>
        <div className="tab-content">
          {renderTabContent()}
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default WidgetModal;
