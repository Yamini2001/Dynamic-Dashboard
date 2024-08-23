import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import './Card.css';

// Sample data for the pie chart
const data = [
  { name: 'Connected', value: 2 },
  { name: 'Not Connected', value: 2 },
];

const COLORS = ['#0033cc', '#99ccff']; // Blue and light blue

const CloudAccountsCard = () => {
  return (
    <div className="card">
      <h3 className="card-title">Cloud Accounts</h3>
      <div className="chart-container">
        <div className="pie-chart">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={450}
                paddingAngle={0.5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                <Label content={<CustomLabel />} position="center" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: COLORS[0] }}></div>
            <div className="legend-text">Connected (2)</div>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: COLORS[1] }}></div>
            <div className="legend-text">Not Connected (2)</div>
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
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '16px', fontWeight: 'bold', fill: '#333' }}
      >
        2
      </text>
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '16px', fontWeight: 'bold', fill: '#333' }}
      >
        Total
      </text>
    </g>
  );
};

export default CloudAccountsCard;
