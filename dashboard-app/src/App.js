import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import TopBar from './components/TopBar';
import DashboardHeader from './components/DashboardHeader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <DashboardHeader />
    <DashboardProvider>
    </DashboardProvider>
    </div>
  );
}

export default App;
