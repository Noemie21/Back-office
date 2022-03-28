import React from 'react';
import Contact from '../Components/Contact';
import Informations from '../Components/Informations';
import SearchBar from '../Components/SearchBar';

export default function ContactPage() {
  return (
    <div className="bg-background flex flex-row  h-full ">
      <Informations />
      <div className="bg-gray w-full h-full">
        <div className="w-full h-full">
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Button
          </button>
        </div>
        <div className="bg-white ml-10  mt-20 shadow-2xl  h-full">
          <SearchBar />
          <Contact />
        </div>
      </div>
    </div>
  );
}
