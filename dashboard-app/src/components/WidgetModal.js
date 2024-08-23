import React from 'react';
import './WidgetModal.css';

const WidgetModal = ({ isOpen, onClose, onConfirm, widgetOptions }) => {
  const [selectedWidgets, setSelectedWidgets] = React.useState([]);

  const handleCheckboxChange = (widgetName) => {
    setSelectedWidgets((prevSelected) =>
      prevSelected.includes(widgetName)
        ? prevSelected.filter((item) => item !== widgetName)
        : [...prevSelected, widgetName]
    );
  };

  const handleConfirm = () => {
    onConfirm(selectedWidgets);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Personalize your dashboard by adding the following widgets:</h3>
          <div className="widget-options">
            {widgetOptions.map(option => (
              <div key={option} className="widget-option">
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <div className="modal-buttons">
            <button onClick={onClose} className="cancel-btn">Cancel</button>
            <button onClick={handleConfirm} className="confirm-btn">Confirm</button>
          </div>
        </div>
      </div>
    )
  );
};

export default WidgetModal;
