import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/StateContextProvider';

const results2 = [
  {
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, nibh et convallis rutrum, odio ante cursus enim, sed mollis nibh justo quis diam. Nulla in tristique eros. Suspendisse sit amet lacus in quam rhoncus convallis.',
    title: 'title',
    source: 'Twitter',
    score: -0.75,
  },
  {
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, nibh et convallis rutrum, odio ante cursus enim, sed mollis nibh justo quis diam. Nulla in tristique eros. Suspendisse sit amet lacus in quam rhoncus convallis.',
    title: 'title',
    source: 'Twitter',
    score: -0.75,
  },
  {
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, nibh et convallis rutrum, odio ante cursus enim, sed mollis nibh justo quis diam. Nulla in tristique eros. Suspendisse sit amet lacus in quam rhoncus convallis.',
    title: 'title',
    source: 'Twitter',
    score: -0.75,
  },
  {
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, nibh et convallis rutrum, odio ante cursus enim, sed mollis nibh justo quis diam. Nulla in tristique eros. Suspendisse sit amet lacus in quam rhoncus convallis.',
    title: 'title',
    source: 'Twitter',
    score: -0.75,
  },
  {
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, nibh et convallis rutrum, odio ante cursus enim, sed mollis nibh justo quis diam. Nulla in tristique eros. Suspendisse sit amet lacus in quam rhoncus convallis.',
    title: 'title',
    source: 'Twitter',
    score: -0.75,
  },
  {
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, nibh et convallis rutrum, odio ante cursus enim, sed mollis nibh justo quis diam. Nulla in tristique eros. Suspendisse sit amet lacus in quam rhoncus convallis.',
    title: 'title',
    source: 'Twitter',
    score: -0.75,
  },
];

export const Results = () => {
  const { results, loading, searchTerm } = useStateContext();

  return (
    <div className="mt-5 sm:px-56 flex flex-wrap justify-between space-y-6">
      {results?.map(({ id, link, title, source, score }, index) => (
        <>
          <div key={index} className="pr-5 md:w-5/6 w-full">
            {/* <a href={link} target="_blank" rel="noreferrer"> */}
            <p className="text-lg dark:text-blue-300 text-blue-700  ">
              {title}
            </p>
            <p className="text-sm">
              {link.length > 30 ? link.substring(0, 100) : link}
            </p>
            <p className="text-xs text-gray-500">Source: {source}</p>
            {/* </a> */}
          </div>
          <div className="md:w-1/6">
            <p className="text-sm underline">Polarity</p>
            <p className="text-sm">{score}</p>
          </div>
        </>
      ))}
    </div>
  );
};
