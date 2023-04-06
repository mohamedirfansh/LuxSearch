import React from 'react';
import { BiUpvote, BiCommentDetail } from 'react-icons/bi';
import { FaRedditAlien } from 'react-icons/fa';

function RedditCard({ result }) {
  result.polarity = 2;
  let polarityColor;
  let polarityText;
  if (result.polarity == 0) {
    polarityColor = 'bg-red-500 dark:bg-red-600';
    polarityText = 'Negative';
  } else if (result.polarity == 2) {
    polarityColor = 'bg-amber-400 dark:bg-amber-500';
    polarityText = 'Neutral';
  } else {
    polarityColor = 'bg-green-400 dark:bg-green-600';
    polarityText = 'Positive';
  }

  return (
    <div
      key={result?._source.url}
      className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark"
    >
      <div className="group">
        <a
          href={result?._source.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm line-clamp-1"
        >
          {result?._source.url.length > 30
            ? `${result?._source.url.substring(0, 30)}...`
            : result?._source.url}
        </a>
        <a href={result?._source.url} target="_blank" rel="noreferrer">
          <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-1 truncate group-hover:underline">
            u/{result?._source.username}
          </h2>
        </a>
        <p className="text-xs text-gray-500">score: {result?._score}</p>
        <p
          className={`inline-block px-2 py-0.5 ${polarityColor} text-white text-xs font-medium rounded-full`}
        >
          {polarityText}
        </p>
      </div>
      <p className="mt-2 mb-2 line-clamp-3 text-gray-600 dark:text-gray-200">
        {result?._source.original_post}
      </p>
      <div className="flex text-gray-500 dark:text-gray-300">
        <div className="flex items-center space-x-1 mr-5">
          <BiUpvote className="h-4" />
          <p className="text-sm">{result._source.upvotes}</p>
        </div>
        <div className="flex items-center space-x-1 mr-5">
          <BiCommentDetail className="h-4" />
          <p className="text-sm">{result._source.comments}</p>
        </div>
        <div className="flex items-center space-x-1 mr-5">
          <p className="text-sm">Posted in: r/{result._source.subreddit}</p>
        </div>
        <div className="ml-auto">
          <FaRedditAlien />
        </div>
      </div>
    </div>
  );
}

export default RedditCard;
