import React from 'react';

import Menu from '../Components/Informations';
import SearchBar from '../Components/SearchBar';
import ChatBox from '../Components/Chat/Chatbox';
import '../App.css';
import Messages from '../Components/Chat/List-messages';

export default function AdminPage() {
  return (
    <div className="flex flex-row max-h-full">
      <Menu className="w-64" />
      <div className="w-full">
        <SearchBar />
        <div className="bg-background p-9 flex flex-row justify-between">
          <div className="box w-full mr-6">
            <Messages />
          </div>

          <ChatBox />
        </div>
      </div>
    </div>
  );
}
