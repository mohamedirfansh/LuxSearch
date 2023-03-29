import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import configs from '../../configs'
// import { data } from '../../dummy_response/stats/HistogramStats';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Posts by time',
    },
  },
};

const labels = ['November', 'December', 'January', 'February'];
export const data = {
  labels: labels,
  datasets: [
    {
      label: 'twitter',
      data: [354, 376, 368, 307],
      backgroundColor: configs.twitterColor,
    },
    {
      label: 'reddit',
      data: [104, 268, 577, 739],
      backgroundColor: configs.redditColor,
    },
  ],
};

function Histogram() {
  return <Bar options={options} data={data} />;
}

export default Histogram;
