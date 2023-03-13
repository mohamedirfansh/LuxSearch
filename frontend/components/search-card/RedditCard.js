import React from 'react';
import { BiUpvote, BiCommentDetail } from 'react-icons/bi';
import { FaRedditAlien } from 'react-icons/fa';

function RedditCard({ result }) {
  return (
    <div
      key={result?.link}
      className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark"
    >
      <div className="group">
        <a
          href={result?.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm line-clamp-1"
        >
          {result?.link.length > 30
            ? `${result?.link.substring(0, 30)}...`
            : result?.link}
        </a>
        <a href={result?.link} target="_blank" rel="noreferrer">
          <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-1 truncate group-hover:underline">
            u/{result?.author}
          </h2>
        </a>
        <p className="text-xs text-gray-500">Polarity: {result?.score}</p>
      </div>
      <p className="mt-2 mb-2 line-clamp-3 text-gray-600 dark:text-gray-200">
        {result?.data}
      </p>
      <div className="flex text-gray-500 dark:text-gray-300">
        <div className="flex items-center space-x-1 mr-5">
          <BiUpvote className="h-4" />
          <p className="text-sm">{result.upvotes}</p>
        </div>
        <div className="flex items-center space-x-1 mr-5">
          <BiCommentDetail className="h-4" />
          <p className="text-sm">{result.comments}</p>
        </div>
        <div className="flex items-center space-x-1 mr-5">
          <p className="text-sm">Posted in: r/{result.sub}</p>
        </div>
        <div className="ml-auto">
          <FaRedditAlien />
        </div>
      </div>
    </div>
  );
}

export default RedditCard;
