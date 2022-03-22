import React from 'react';
import Menu from '../Components/Informations';
import SearchBar from '../Components/SearchBar';
import Left from '../Components/Dashboard/Left';
import Deals from '../Components/Dashboard/Deals';
import Tasks from '../Components/Dashboard/Tasks';

export default function DashboardPage() {
  return (
    <div className="flex flex-row">
      <Menu className="w-64" />
      <div className="w-full">
        <SearchBar />
        <div className="bg-background p-9 flex flex-row justify-between">
          <Left />
          <div className="w-2/5 flex flex-col">
            <Deals />
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}
