import React from 'react';
import '../../App.css';
import picture from '../../assets/profile.png';

export default function ChatBox() {
  return (
    <div className=" mt-6 grid justify-items-end h-40">
      <div className="flex flex-row justify-end items-center">
        <img className="rounded-full h-8" src={picture} alt="profile" />
        <p className="ml-6 mr-2">You</p>
        <span className="text-gray-400">11:20</span>
      </div>

      <div className="w-9/12 border border-gray-200 rounded-l-md rounded-br-md p-5 mt-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Id aliquet lectus proin nibh nisl. Suspendisse faucibus interdum posuere
          lorem ipsum dolor sit amet consecteturg.
        </p>
      </div>
    </div>
  );
}
