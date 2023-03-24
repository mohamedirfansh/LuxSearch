import React from 'react';
import HeaderLink from './HeaderLink';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { TfiTwitter, TfiReddit } from "react-icons/tfi";
import { useRouter } from 'next/router';

function HeaderLinks() {
  const router = useRouter();
  const q = router.query.q;
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm sm:text-base lg:justify-start lg:space-x-36 lg:pl-48 border-b dark:border-secondary-dark">
      <div className="flex space-x-6 w-full justify-evenly sm:w-auto dark:text-gray-400">
        <HeaderLink
          Icon={MagnifyingGlassIcon}
          title="All"
          link={`/search?q=${q}`}
          selected={router.pathname == '/search' ? true : false}
        />
        <HeaderLink
          Icon={TfiTwitter}
          title="Twitter"
          link={`/twitter?q=${q}`}
          selected={router.pathname == '/twitter' ? true : false}
        />
        <HeaderLink
          Icon={TfiReddit}
          title="Reddit"
          link={`/reddit?q=${q}`}
          selected={router.pathname == '/reddit' ? true : false}
        />
        <HeaderLink
          Icon={ChartBarIcon}
          title="Advance"
          link={`/advance?q=${q}`}
        />
      </div>
    </div>
  );
}

export default HeaderLinks;
