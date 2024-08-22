import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import './risk.css';

// Sample data for the pie chart
const riskData = [
  { name: 'Failed', value: 1689, color: '#f44336' }, // Red
  { name: 'Warning', value: 681, color: '#ffeb3b' }, // Yellow
  { name: 'Not Available', value: 36, color: '#bababa' }, // Light Gray
  { name: 'Passed', value: 7253, color: '#4caf50' }, // Green
];

const RiskAssessmentCard = () => {
  return (
    <div className="card">
      <h3 className="card-title">Cloud Accounts with Risk Assessment</h3>
      <div className="content-container">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie
                data={riskData}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                startAngle={180}
                endAngle={-270}
                paddingAngle={0.1}
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label content={<CustomLabel />} position="center" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="square-container">
  <div className="square red">
    <div className="square-box"></div>
    <div className="square-text">Failed (1689)</div>
  </div>
  <div className="square yellow">
    <div className="square-box"></div>
    <div className="square-text">Warning (681)</div>
  </div>
  <div className="square light-gray">
    <div className="square-box"></div>
    <div className="square-text">Not Available (36)</div>
  </div>
  <div className="square green">
    <div className="square-box"></div>
    <div className="square-text">Passed (7253)</div>
  </div>
</div>
      </div>
    </div>
  );
};

const CustomLabel = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy - 10} // Adjust vertical position if needed
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '16px', fontWeight: 'bold', fill: '#333' }}
      >
        {riskData.reduce((sum, entry) => sum + entry.value, 0)}
      </text>
      <text
        x={cx}
        y={cy + 10} // Adjust vertical position if needed
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '16px', fontWeight: 'bold', fill: '#333' }}
      >
        Total
      </text>
    </g>
  );
};

export default RiskAssessmentCard;
