import React from 'react';
import '../../App.css';

export default function Tasks() {
  return (
    <div className=" mt-7 box">
      <div className="mt-2 flex flex-row justify-between px-6">
        <h1>Tasks</h1>
        <p className="filter">
          Show:
          <span>This Month</span>
        </p>
      </div>
      <div className="mt-7 h-px bg-gray-300" />
      <div className="my-6 flex justify-around">
        <div className="rounded-full w-56 h-56 border-8 border-green flex justify-center items-center text-green text-7xl">60%</div>
        <div className="flex flex-col justify-center  w-auto text-sm">
          <div className="flex flex-row items-center">
            <div className="rounded-full w-3 h-3 border-2 border-yellow-500 mr-2" />
            <p>Active</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="rounded-full w-3 h-3 border-2 border-green mr-2" />
            <p>Completed</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="rounded-full w-3 h-3 border-2 border-red-600 mr-2" />
            <p>Ended</p>
          </div>

        </div>
      </div>
    </div>
  );
}
