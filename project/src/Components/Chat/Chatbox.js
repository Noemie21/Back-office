import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import picture from '../../assets/profile.png';

export default function Tasks() {
  const paperClip = <FontAwesomeIcon icon={faPaperclip} />;
  const emoji = <FontAwesomeIcon icon={faFaceSmile} />;
  return (
    <div className=" mt-7 box">
      <div className="flex flex-row items-center">
        <img className="rounded-full h-8" src={picture} alt="profile" />
        <p className="ml-6 mr-2">Lindsey Stroud</p>
        <div className="rounded-full w-3 h-3 bg-green" />
      </div>

      <div className="mt-7 h-px bg-gray-300" />

      <div className="my-6 flex justify-around h-96">
        <h1>Hello World</h1>
      </div>

      <div className="mt-7 h-px bg-gray-300" />

      <div className="flex flex-row items-center justify-between px-4 py-1.5 h-12">
        <h1 className="text-gray-400">Type a message...</h1>
        <div className="border-l border-gray-400 w-16 flex flex-row justify-around h-10 items-center">
          <p className="text-gray-400">{paperClip}</p>
          <p className="text-gray-400">{emoji}</p>
        </div>
      </div>
    </div>
  );
}
