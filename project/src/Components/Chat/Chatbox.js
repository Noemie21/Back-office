import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import picture from '../../assets/profile.png';
import Sent from './Sent';
import Received from './Received';

export default function ChatBox() {
  const paperClip = <FontAwesomeIcon icon={faPaperclip} />;
  const emoji = <FontAwesomeIcon icon={faFaceSmile} />;
  return (
    <div className="box">
      <div className="flex flex-row items-center pl-5 pt-4">
        <img className="rounded-full h-8" src={picture} alt="profile" />
        <p className="ml-6 mr-2">Lindsey Stroud</p>
        <div className="rounded-full w-3 h-3 bg-green" />
      </div>

      <div className="mt-7 h-px bg-gray-300" />

      <div className="flex flex-col max-h-600 overflow-y-scroll px-4">
        <Received />
        <Sent />
        <Received />
        <Sent />
        <div className="mt-6 grid justify-items-start h-40">
          <div className="flex flex-row justify-start items-center">
            <img className="rounded-full h-8" src={picture} alt="profile" />
            <p className="ml-6 mr-2">Lindsey Stroud</p>
            <span className="text-gray-400">11:12</span>
          </div>

          <div className="w-9/12 bg-blue rounded-r-md rounded-bl-md p-5 text-white mt-2">
            <p>
              Your idea for this application is nice!
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-row justify-start items-center">
          <img className="rounded-full h-8" src={picture} alt="profile" />
          <p className="ml-6 mr-2">Lindsey Stroud</p>
          <span className="text-gray-400">Typing a message...</span>
        </div>
      </div>

      <div className="mt-7 h-px bg-gray-300" />

      <div className="flex flex-row items-center justify-between px-4 py-1.5 h-14">
        <h1 className="text-gray-400">Type a message...</h1>
        <div className="border-l border-gray-400 w-16 flex flex-row justify-around h-12 items-center">
          <p className="text-gray-400">{paperClip}</p>
          <p className="text-gray-400">{emoji}</p>
        </div>
      </div>
    </div>
  );
}
