import { useState } from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Avatar from '../Avatar';
import HeaderLinks from './HeaderLinks';

function Header({ q }) {
  const router = useRouter();
  const path = router.pathname;
  const searchInputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (term.trim() < 1) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    router.push(`/${path}?q=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-[99]  dark:bg-primary-dark dark:text-white">
      <div className="grid sm:grid-cols-12 p-5 items-center">
        <div className="flex justify-center sm:col-span-1 mb-4 sm:mb-0">
          <Image
            alt="logo"
            src="/images/logo2.png"
            height={40}
            width={150}
            className="cursor-pointer rounded"
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <div className="flex justify-center items-center sm:col-span-11">
          <form
            key={q}
            className={`flex flex-grow border border-gray-200 rounded shadow-lg max-w-3xl items-center px-6 py-3 sm:ml-10 sm:mr-5 dark:bg-secondary-dark dark:border-0 ${
              !isValid ? 'border-red-300 ' : ''
            }`}
          >
            <input
              ref={searchInputRef}
              className="flex-grow w-full focus:outline-none  dark:bg-secondary-dark"
              type="text"
              defaultValue={q}
            />
            <XMarkIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 hover:scale-125"
              onClick={() => {
                searchInputRef.current.value = '';
              }}
            />
            <MagnifyingGlassIcon
              className="h-6 text-blue-400  ml-2 cursor-pointer transition duration-100 hover:scale-125"
              onClick={search}
            />
            <button hidden type="submit" onClick={search}></button>
          </form>
          <Avatar className="ml-auto fixed top-5 right-5 sm:static" />
        </div>
      </div>
      <HeaderLinks />
    </header>
  );
}

export default Header;
