import React from 'react';

export const Search = () => (
  <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
    <input
      type="text"
      className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded shadow-sm outline-none p-6 text-black hover:shadow-lg"
      placeholder="Search luxury brand"
    />

    <button
      type="button"
      className="absolute top-2.5 right-4 text-xl text-gray-500 "
    >
      x
    </button>
  </div>
);
