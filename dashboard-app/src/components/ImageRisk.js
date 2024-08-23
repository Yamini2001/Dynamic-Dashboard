import React from 'react';
import './ImageRisk.css'; // Import the CSS for styling

const ImageRisk = () => {
  return (
    <div className="card">
      <div className="image-risk">
        <h3 className="image-risk-heading">Image Risk Assessment</h3>
        <p className="total-vulnerabilities">
          <span className='total'>1490</span> Total Vulnerabilities
        </p>
        <div className="horizontal-line-container">
  <div className="horizontal-line">
    <div className="segment critical"></div>
    <div className="segment high"></div>
    <div className="segment medium"></div>
    <div className="segment mild"></div>
    <div className="segment low"></div>
    <div className="marker critical">
      <div className="color-box"></div>Critical (9)
    </div>
    <div className="marker high">
      <div className="color-box"></div>High (150)
    </div>
    <div className="marker medium">
      <div className="color-box"></div>Medium (840)
    </div>
    <div className="marker mild">
      <div className="color-box"></div>Mild (407)
    </div>
    <div className="marker low">
      <div className="color-box"></div>Low (64)
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ImageRisk;
