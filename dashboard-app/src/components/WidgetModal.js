import React from 'react';

const WidgetModal = ({ isOpen, onClose, onAddWidget, widgetOptions }) => {
  const handleAddWidgets = (widgetName) => {
    onAddWidget(widgetName);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Select Widgets</h3>
          <div className="widget-options">
            {widgetOptions.map(option => (
              <button key={option} onClick={() => handleAddWidgets(option)}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default WidgetModal;
