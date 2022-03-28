import React from 'react';
import '../../App.css';
import picture from '../../assets/deals.png';

export default function Deals() {
  return (
    <div className="box pb-6">
      <div className="mt-2 flex flex-row justify-between px-6">
        <h1>Deals</h1>
        <p className="filter">
          Show:
          <span>Monthly</span>
        </p>
      </div>
      <div className="mt-7 h-px bg-gray-300" />

      <div className="px-6 mt-4">
        <div className="flex flex-row items-center">
          <div className="rounded-full w-3 h-3 border-2 border-blue mr-2" />
          <p>Closed deals</p>
        </div>
        <img className="mt-6" src={picture} alt="deals" />
      </div>
    </div>
  );
}
