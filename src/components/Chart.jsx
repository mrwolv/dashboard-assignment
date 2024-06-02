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
    labels: ["United States", "Germany", "Great Britain", "Brazil"],
    datasets: [
      {
        label: 'Sales',
        data: [2500, 3900, 1400, 562],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Value',
        data: [230900, 440000, 190700, 143960],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
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
