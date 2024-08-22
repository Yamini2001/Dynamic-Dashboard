import React, { createContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: 'category1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'widget1', name: 'Widget 1', text: 'Random text for Widget 1' },
        { id: 'widget2', name: 'Widget 2', text: 'Random text for Widget 2' }
      ]
    },
    {
      id: 'category2',
      name: 'Sales Dashboard',
      widgets: []
    }
  ]);

  return (
    <DashboardContext.Provider value={{ categories, setCategories }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
