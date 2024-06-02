// RevenueExpenseChart.js
import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueExpenseChart = () => {
  const chartRef = useRef(null);

  // Data from JSON
  const revenueExpensesData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 12000, 15000, 18000, 20000, 22000, 25000, 23000, 24000, 26000, 27000, 30000],
        borderColor: '#1E90FF',
        backgroundColor: 'rgba(30, 144, 255, 0.2)',
        borderWidth: 2,
      },
      {
        label: 'Expenses',
        data: [7000, 8000, 7500, 8500, 9000, 9500, 10000, 9800, 9200, 10500, 11000, 11500],
        borderColor: '#FF6347',
        backgroundColor: 'rgba(255, 99, 71, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Revenue Expense Data'
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Month'
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

  return <Line ref={chartRef} data={revenueExpensesData} options={options} />;
};

export default RevenueExpenseChart;
