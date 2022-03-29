import React from 'react';
import notificationPicture from '../../assets/checkbox.png';
import notificationPicture2 from '../../assets/checkbox2.png';
import lindsey from '../../assets/lindsay.png';
import nicci from '../../assets/nicci.png';
import wordPress from '../../assets/wordpress.png';
import rebecca from '../../assets/rebecca.png';
import jane from '../../assets/jane.png';
import jones from '../../assets/jones.png';
import martin from '../../assets/martin.png';
import franz from '../../assets/franz.png';
import judith from '../../assets/judith.png';
import john from '../../assets/john.png';
import sentGreen from '../../assets/sentGreen.png';
import error from '../../assets/error.png';
import sent from '../../assets/sent.png';

export default function Messages() {
  return (
    <div>
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={lindsey}
              alt="someone"
            />
            <h4 className="text-sky-400/100 text-sm">Lindsey Stroud</h4>
          </div>
          <p className="text-xs text-colortext ml-28 ">30 Dec 2018, 12:34</p>
        </div>
        <div className="flex">
          <span className="text-colortext text-sm">
            Your idea for this application is nice!
          </span>
          <img
            className="ml-24 object-contain rounded-full"
            src={notificationPicture}
            alt="notification"
          />
        </div>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={nicci}
              alt="someone"
            />
            <h4 className="text-sm">Nicci Troiani</h4>
          </div>

          <p className="text-xs text-colortext ml-32 ">30 Dec 2018, 11:12</p>
        </div>
        <div className="flex">
          <span className="text-graytext text-sm">
            Nicci is typing a message...
          </span>
          <img
            className="ml-36 object-contain rounded-full"
            src={notificationPicture2}
            alt="notification"
          />
        </div>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={wordPress}
              alt="someone"
            />
            <h4 className="text-xs">WordPress conferesion</h4>
          </div>
          <p className="text-xs text-colortext ml-20 ">29 Dec 2018, 18:05</p>
        </div>
        <div className="flex">
          <span className="text-graytext text-sm">You:</span>
          <span className="text-colortext text-sm">Sure!</span>
          <img
            className="ml-64 object-contain"
            src={sentGreen}
            alt="notification2"
          />
        </div>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={rebecca}
              alt="someone"
            />
            <h4 className="text-sm">Rebecca Moore</h4>
          </div>
          <p className="text-xs text-colortext ml-28 "> 29 Dec 2018, 18:05</p>
        </div>
        <div className="flex">
          <span className="text-graytext text-sm">You:</span>
          <span className="text-colortext text-sm">
            I’m not sure about this..
          </span>

          <img className="object-contain ml-36" src={error} alt="error" />
        </div>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />

      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={jane}
              alt="someone"
            />
            <h4 className="text-sm">Jane Doe</h4>
          </div>
          <p className="text-xs text-colortext ml-36 "> 29 Dec 2018, 18:05</p>
        </div>
        <div className="flex">
          <span className="text-graytext text-sm">You:</span>
          <span className="text-colortext text-sm">
            It should be pretty simple.
          </span>
          <img className="object-contain ml-32" src={sent} alt="sent" />
        </div>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={jones}
              alt="someone"
            />
            <h4 className="text-sm">Jones Dermot</h4>
          </div>
          <p className="text-xs text-colortext ml-28 "> 29 Dec 2018, 18:05</p>
        </div>
        <span className="text-colortext text-sm">
          I have a new feature for this project.
        </span>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={martin}
              alt="someone"
            />
            <h4 className="text-sm">Martin Merces</h4>
          </div>
          <p className="text-xs text-colortext ml-28 "> 29 Dec 2018, 12:48</p>
        </div>
        <p className="text-graytext text-sm">Martin is typing a message... </p>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={franz}
              alt="someone"
            />
            <h4 className="text-sm">Franz Ferdinand</h4>
          </div>
          <p className="text-xs text-colortext ml-28 "> 28 Dec 2018, 15:27</p>
        </div>
        <p className="text-graytext text-sm">
          Can we schedule an online meeting? Thanks!
        </p>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={judith}
              alt="someone"
            />
            <h4 className="text-sm">Judith Williams</h4>
          </div>
          <p className="text-xs text-colortext ml-28 "> 28 Dec 2018, 13:19</p>
        </div>
        <span className="text-colortext text-sm">
          Can we schedule an online meeting? Thanks!
        </span>
      </div>
      <div className="w-full bg-gray-100 h-0.5" />
      <div className="h-20 mt-4">
        <div className="flex">
          <div className="flex">
            <img
              className="object-contain rounded-full"
              src={john}
              alt="someone"
            />
            <h4 className="text-sm">John Smith</h4>
          </div>
          <p className="text-xs text-colortext ml-36 "> 27 Dec 2018, 21:22</p>
        </div>
        <span className="text-colortext text-sm">It’s fine</span>
      </div>
    </div>
  );
}
