import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
import picture from '../../assets/profile.png';

export default function Left() {
  const pen = <FontAwesomeIcon icon={faPen} />;
  const trash = <FontAwesomeIcon icon={faTrashCan} />;
  return (
    <div className="box py-5 w-7/12 ">
      <div className="px-6">
        <div className="flex flex-row justify-between">
          <p>8 task completed out of 10</p>
          <p className="filter">
            Show:
            <span>This week</span>
          </p>
        </div>
        <div className="mt-4 h-1 bg-gray-300">
          <div className="h-1 w-4/5 bg-green" />
        </div>
        <div className="mt-5">
          <h1>23 December, Sunday</h1>
          <div className=" mt-6 flex flex-row justify-between">
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Sun</div>
              <div className="bg-blue text-white rounded-full w-6">23</div>
            </div>
            <div className="flex flex-col items-center text-blue">
              <div>Mon</div>
              <div>24</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Tue</div>
              <div className="date">25</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Wed</div>
              <div className="date">26</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Thu</div>
              <div className="date">27</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Fri</div>
              <div className="date">28</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Sat</div>
              <div className="date">29</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 h-px bg-gray-300" />

      <div className="px-6 flex flex-col">
        <div className="mt-6 box px-4 h-32">
          <div className="flex flex-row justify-between mt-4">
            <h1>Send benefit review by Sunday</h1>
            <p className="text-gray-500">Reminder</p>
          </div>
          <p className="text-gray-500">
            Due Date:
            <span className="text-gray-800"> December 23, 2018</span>
          </p>
          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row items-center">
              <img className="rounded-full h-8" src={picture} alt="profile" />
              <p className="ml-6">George Fields</p>
            </div>
            <button className="bg-green w-20 rounded text-white" type="button">Completed</button>
          </div>
        </div>
        <div className="mt-6 box px-4 h-32">
          <div className="flex flex-row justify-between mt-4">
            <h1>Invite to office meet-up</h1>
            <p className="text-gray-500">Call</p>
          </div>
          <p className="text-gray-500">
            Due Date:
            <span className="text-gray-800"> December 23, 2018</span>
          </p>
          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row items-center">
              <img className="rounded-full h-8" src={picture} alt="profile" />
              <p className="ml-6">Rebecca Moore</p>
            </div>
            <div className="flex flex-row w-52 justify-around items-center">
              <div className="rounded-full w-5 h-5 border-4 border-yellow-500" />
              <div className="rounded-full w-5 h-5 border-4 border-green" />
              <p className="text-gray-500">{pen}</p>
              <p className="text-gray-500">{trash}</p>
              <button className="bg-red-600 w-20 rounded text-white" type="button">Ended</button>
            </div>
          </div>
        </div>
        <div className="mt-6 box px-4 h-32">
          <div className="flex flex-row justify-between mt-4">
            <h1>Office meet-up</h1>
            <p className="text-gray-500">Event</p>
          </div>
          <p className="text-gray-500">
            Due Date:
            <span className="text-gray-800"> December 23, 2018</span>
          </p>
          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row items-center">
              <img className="rounded-full h-8" src={picture} alt="profile" />
              <p className="ml-6">Lindsey Stroud</p>
            </div>
            <button className="bg-green w-20 rounded text-white" type="button">Completed</button>
          </div>
        </div>
        <p className="mt-6 text-blue self-center"><a href="/#">Show more</a></p>
      </div>
    </div>
  );
}
