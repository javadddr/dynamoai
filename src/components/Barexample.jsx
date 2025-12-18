// src/components/charts/NumberOfUsers.jsx
import React, { useState } from 'react';
import Bari from '../ui/Bari';
const Barexample = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const data = [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 300 },
    { month: 'Mar', users: 500 },
    { month: 'Apr', users: 200 },
    { month: 'May', users: 600 },
    { month: 'Jun', users: 300 },
  ];
  // const data = []
  const data2 = [
    { month: 'Jan', users: 400, activeUsers: 200 },
    { month: 'Feb', users: 300, activeUsers: 150 },
    { month: 'Mar', users: 500, activeUsers: 300 },
    { month: 'Apr', users: 200, activeUsers: 50 },
    { month: 'May', users: 600, activeUsers: 400 },
    { month: 'Jun', users: 300, activeUsers: 100 },
  ];

  return (
 
    <div>
      <Bari
        data={data}
        xKey="month"
        dataKeys={['users']}
        labelMap={{
          users: "Total Users",
        }}
        width={600}
        height={350}
        radius={[4, 4, 0, 0]}
        colors={['#F54180']}
        showBorder={true}
        Grid={false}
        YAxisShow={false}
        isDarkMode={isDarkMode}
        title="Number of Users Over Time"
        footer="Data represents monthly active users"
        dataLabels={true} // Show labels
        LegendShow={true}
        labelPosition="top" // Or "inside"
        theme = 'default'   // ← NEW: default | glass | vibrant | minimal aura nord
      />
      <Bari
      data={data2}
      xKey="month"
      dataKeys={['users', 'activeUsers']}  
      labelMap={{
        users: "Total Users",
        activeUsers: "Active Users"
      }}// ← Multiple keys = stacked!
      colors={['#AE7EDE', '#74DFA2']}       // Purple + Emerald (beautiful combo)
      title="Total vs Active Users"
      footer="Stacked view of registered and active users"
      theme="glass"           // or "glass", "midnight", etc.
      showBorder={true}
      Grid={false}
      YAxisShow={false}
      dataLabels={true}
      labelPosition="top"
      isDarkMode={isDarkMode}
      width={500}
      height={380}
      radius={[0, 0, 0, 0]}
      LegendShow={true}
      stackId={2}
    />
    </div>
 
  );
};

export default Barexample;