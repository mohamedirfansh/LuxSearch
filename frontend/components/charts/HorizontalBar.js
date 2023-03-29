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
import configs from '../../configs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Top 10 users posts',
    },
  },
};

const labels = [
  'Iampictorius',
  'UhrenZ',
  'gold__watches',
  'WannaBuyaWatch',
  'WatchesPA',
  'kokoshungsan',
  'DwissWatch',
  'NahidAlaei',
  'A2Z_ONLINE_SHOP',
  'BestTLD',
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'twitter',
      data: [21, 34, 12, 4, 7, 3, 10, 9, 12, 22],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: configs.twitterColor,
    },
    {
      label: 'reddit',
      data: [23, 43, 12, 32, 12, 10, 9, 8, 7, 11],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: configs.redditColor,
    },
  ],
};

function HorizontalBar() {
  return <Bar options={options} data={data} />;
}

export default HorizontalBar;
