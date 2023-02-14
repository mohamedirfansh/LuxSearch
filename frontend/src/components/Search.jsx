import React, { useState } from 'react';
import { useStateContext } from '../contexts/StateContextProvider';

export const Search = () => {
  const { setSearchTerm, getResults } = useStateContext();
  const [text, setText] = useState('');

  const searchHandler = () => {
    getResults();
  }
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search luxury brand"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="button"
        className="absolute top-2.5 right-4 text-xl text-gray-500 "
        onClick={() => setText('')}
      >
        x
      </button>

      <button
        type="button"
        className="absolute top-2.5 right-8 text-xl text-gray-500 "
        onClick={searchHandler}
      >
        🔍
      </button>

    </div>
  );
};
