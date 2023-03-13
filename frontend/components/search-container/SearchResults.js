import React from 'react';
import PagBtns from '../PagBtns';
import { useRouter } from 'next/router';
import Sentiment from './Sentiment';
import TwitterCard from '../search-card/TwitterCard';
import RedditCard from '../search-card/RedditCard';

function SearchResults({ results, related }) {
  const router = useRouter();
  return (
    <div className="mx-auto w-full px-3 sm:pl[5%] md:pl-[14%] lg:pl-48  dark:bg-primary-dark dark:text-white">
      <p className="text-gray-600 text-md mb-5 mt-3 dark:text-gray-400">
        Found {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-7 dark:text-white p-1 ">
          {results?.items?.map((result) =>
            result.type === 'twitter' ? (
              <TwitterCard result={result} />
            ) : (
              <RedditCard result={result} />
            )
          )}
        </div>

        <Sentiment value={0.95} />
      </div>

      <PagBtns />
    </div>
  );
}

export default SearchResults;
