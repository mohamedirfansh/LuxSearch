import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
function PagBtns() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex max-w-2xl justify-around text-blue-700 mb-10 px-5 mt-5">
      {startIndex >= 10 && (
        <Link href={`/search?q=${router.query.q}&start=${startIndex - 10}`}>
        <div className="min-w-[150px] flex space-x-1 ring-2 items-center justify-center cursor-pointer bg-gray-200 dark:text-blue-500 dark:bg-secondary-dark px-6 py-2 rounded-full">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?q=${router.query.q}&start=${startIndex + 10}`}>
        <div className="min-w-[150px] flex space-x-1 ring-2 items-center justify-center cursor-pointer bg-gray-200 dark:text-blue-500 dark:bg-secondary-dark px-6 py-2 rounded-full">
          <p>Next</p>
          <ChevronRightIcon className="h-5" />
        </div>
      </Link>
    </div>
  );
}

export default PagBtns;
