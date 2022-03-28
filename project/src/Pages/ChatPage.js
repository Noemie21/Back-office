import React from 'react';

import Menu from '../Components/Informations';
import SearchBar from '../Components/SearchBar';
import ChatBox from '../Components/Chat/Chatbox';
import '../App.css';

export default function AdminPage() {
  return (
    <div className="flex flex-row max-h-full">
      <Menu className="w-64" />
      <div className="w-full">
        <SearchBar />
        <div className="bg-background p-9 flex flex-row justify-between">
          <div className="box w-3/4 mr-6">Hello World</div>
          <ChatBox />
        </div>
      </div>

    </div>
  );
}
