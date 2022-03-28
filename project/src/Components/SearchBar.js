import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const bell = <FontAwesomeIcon icon={faBell} />;
  return (
    <div className="mt-1 relative rounded-md shadow-sm h-16 flex flex-row justify-between items-center px-8">
      <span className="text-gray-500 text-lg">{element}</span>

      <input type="text" name="search" className="focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Global Search" />
      <span className="relative text-gray-500 text-lg">
        {bell}
        <span className="absolute h-2 w-2 rounded-full bg-red-500 border-2 border-gray-500 top-0 left-3" />
      </span>

    </div>
  );
}
