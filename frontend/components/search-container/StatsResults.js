import React from 'react';
import Histogram from '../charts/Histogram';
import HorizontalBar from '../charts/HorizontalBar';
import PieChart from '../charts/PieChart';
import WordCloud from '../charts/WordCloud';

function StatResults() {
  return (
    <div className="mx-auto w-full px-3 sm:pl[5%] md:pl-[14%] lg:pl-48  dark:bg-primary-dark dark:text-white">
      <p className="text-gray-600 text-md mb-5 mt-3 dark:text-gray-400">
        Enhanced statistics of the search results for your query:
      </p>
      <div className="flex flex-auto">
        <div className="w-1/4 max-w-2xl mb-4 mr-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
          <p className="font-medium">Average likes (twitter): 7.23</p>
        </div>
        <div className="w-1/4 max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
          <p className="font-medium">Average upvotes (reddit): 2.4</p>
        </div>
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Word Cloud of results:</p>
        <WordCloud />
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Posts by month:</p>
        <Histogram />
      </div>
      <div className="w-1/3 max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Posts split:</p>
        <PieChart />
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Top 10 users from the results:</p>
        <HorizontalBar />
      </div>
    </div>
  );
}

export default StatResults;
