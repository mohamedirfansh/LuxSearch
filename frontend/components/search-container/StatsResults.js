import React from 'react';
import Histogram from '../charts/Histogram';
import HorizontalBar from '../charts/HorizontalBar';
import PieChart from '../charts/PieChart';
import WordCloud from '../charts/WordCloud';

function StatResults({ wordcloud, likes, upvotes, postsmonth, split, twitterusers, redditusers, subreddit }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl[5%] md:pl-[14%] lg:pl-48  dark:bg-primary-dark dark:text-white">
      <p className="text-gray-600 text-md mb-5 mt-3 dark:text-gray-400">
        Enhanced statistics of the search results for your query:
      </p>
      <div className="flex flex-auto">
        <div className="w-1/4 max-w-2xl mb-4 mr-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
          <p className="font-medium">
            Average likes (twitter):{' '}
            {Math.round(likes * 100 + Number.EPSILON) / 100}
          </p>
        </div>
        <div className="w-1/4 max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
          <p className="font-medium">
            Average upvotes (reddit):{' '}
            {Math.round(upvotes * 100 + Number.EPSILON) / 100}
          </p>
        </div>
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Word Cloud of results:</p>
        <WordCloud data={wordcloud} />
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Posts by month:</p>
        <Histogram data={postsmonth} />
      </div>
      <div className="w-1/3 max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Results split:</p>
        <PieChart data={split} />
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Top 10 twitter users from the results:</p>
        <HorizontalBar data={twitterusers} />
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Top 10 reddit users from the results:</p>
        <HorizontalBar data={redditusers} />
      </div>
      <div className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark">
        <p className="font-medium">Top 10 subreddits from the results:</p>
        <HorizontalBar data={subreddit} />
      </div>
    </div>
  );
}

export default StatResults;
