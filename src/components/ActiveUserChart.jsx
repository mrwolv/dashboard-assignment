// SalesByCountryChart.js
import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesByCountryChart = () => {
  const chartRef = useRef(null);

  // Data from JSON
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: 'Active Users',
        data: [10000, 12000, 15000, 18000, 20000, 22000, 25000, 23000, 24000, 26000, 27000, 30000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
    
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Sales by Country'
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Country'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values'
        }
      }
    }
  };

  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default SalesByCountryChart;
