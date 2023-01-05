import React, { useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from '../components/PieChart';
import Data from '../Data';
import '../style.css';
import Header from '../components/Header';

ChartJS.register(...registerables);

function MainUserScreen() {
  const [userData] = useState({
    labels: Data.map((el) => el.year),
    datasets: [{
      label: 'Users Gained',
      data: Data.map((el) => el.userGain),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(70, 158, 94)',
        'rgb(114, 70, 158)',
      ],
      hoverOffset: 4,
    }],
  });
  return (
    <>
      <Header />
      <div
        className="pie-chart-from-users"
      >
        <PieChart chartData={userData} />
      </div>
    </>
  );
}

export default MainUserScreen;
