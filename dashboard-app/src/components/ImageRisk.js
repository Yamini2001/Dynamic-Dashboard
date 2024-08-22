import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ImageRisk.css'; // Import the CSS for styling

const data = [
  { name: 'Critical', value: 9, color: '#8B4513' }, // Brown
  { name: 'High', value: 3, color: '#f44336' }, // Red
  { name: 'Mild', value: 4, color: '#FF9800' }, // Orange
  { name: 'Medium', value: 2, color: '#FFEB3B' }, // Yellow
  { name: 'Low', value: 1, color: '#9E9E9E' }, // Grey
];

const ImageRisk = () => {
  return (
    <div className="image-risk">
      <h3 className="image-risk-heading">Image Risk Assessment</h3>
      <p className="total-vulnerabilities">1490 Total Vulnerabilities</p>
      <div className="chart-container">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default ImageRisk;
