import React from 'react';
import { HeartIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import { FaTwitter, FaRetweet } from 'react-icons/fa';

function TwitterCard({ result }) {
  return (
    <div
      key={result.link}
      className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark"
    >
      <div className="group">
        <a
          href={result.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm line-clamp-1"
        >
          {result.link.length > 30
            ? `${result.link.substring(0, 30)}...`
            : result.link}
        </a>
        <a href={result.link} target="_blank" rel="noreferrer">
          <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-1 truncate group-hover:underline">
            @{result.author}
          </h2>
        </a>
        <p className="text-xs text-gray-500">Polarity: {result.score}</p>
      </div>
      <p className="mt-2 mb-2 line-clamp-3 text-gray-600 dark:text-gray-200">
        {result.data}
      </p>
      <div className="flex text-gray-500 dark:text-gray-300">
        <div className="flex items-center space-x-1 mr-5">
          <HeartIcon className="h-4" />
          <p className="mb-1 text-sm">{result.likes}</p>
        </div>
        <div className="flex items-center space-x-1 mr-5">
          <FaRetweet className="h-4" />
          <p className="mb-1 text-sm">{result.retweets}</p>
        </div>
        <div className="ml-auto">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default TwitterCard;
