import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Users', 'Products', 'Designers'],
    datasets: [
      {
        label: 'count',
        data: [12, 19, 15],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#000099');
          gradient.addColorStop(0.5, '#4d4dff');
          gradient.addColorStop(1, '#b3b3ff');

          return gradient;
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Data Chart',
      },
    },
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Dashboard</Heading>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Dashboard;
