import React from 'react';
import PagBtns from '../PagBtns';
import Sentiment from './Sentiment';
import TwitterCard from '../search-card/TwitterCard';

function SearchResults({ results }) {
  const polarities = results?.hits?.hits?.map((hit) =>
    parseInt(hit._source.polarity)
  );
  const sum = polarities.reduce((total, polarity) => total + polarity, 0);
  const avgPolarity = sum / polarities.length;

  return (
    <div className="mx-auto w-full px-3 sm:pl[5%] md:pl-[14%] lg:pl-48  dark:bg-primary-dark dark:text-white">
      <p className="text-gray-600 text-md mb-5 mt-3 dark:text-gray-400">
        Found {results?.hits?.total?.value} results ({results?.took / 1000}{' '}
        seconds)
      </p>
      <div className="grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-7 dark:text-white p-1 ">
          {results?.hits?.hits?.map((result) => (
            <TwitterCard result={result} key={result._id} />
          ))}
        </div>

        <Sentiment value={avgPolarity / 4} />
      </div>

      <PagBtns />
    </div>
  );
}

export default SearchResults;
