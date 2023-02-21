import {Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function HomeChart(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [{
      label: "donations percent",
      data: [40, 35, 10, 10, 5],
      backgroundColor: [
        '#BEF3C0', // yashil
        '#AC94F1', // binafsha
        '#FFF0CA' ,// och sariq
        '#F9CF64', // to'q sariq
        '#F38FBF', // purple
      ],
      hoverOffset: 4
    }]
  };
  return (
    <div>
      <Doughnut data={data}/>
    </div>
  );
}

export default HomeChart;