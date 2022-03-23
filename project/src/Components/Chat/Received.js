import React from 'react';
import '../../App.css';
import picture from '../../assets/profile.png';

export default function ChatBox() {
  return (
    <div className=" mt-6 grid justify-items-start h-40">
      <div className="flex flex-row justify-start items-center">
        <img className="rounded-full h-8" src={picture} alt="profile" />
        <p className="ml-6 mr-2">Lindsey Stroud</p>
        <span className="text-gray-400">11:12</span>
      </div>

      <div className="w-9/12 bg-blue rounded-r-md rounded-bl-md p-5 text-white mt-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie.
          Ligula ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum
          sed arcu non odio euismod lacinia. Aliquet eget sit amet tellus cras adipiscing enim.
        </p>
      </div>
    </div>
  );
}
