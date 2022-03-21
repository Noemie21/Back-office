import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './Pages/DashboardPage';
import ContactPage from './Pages/ContactPage';
import ChatPage from './Pages/ChatPage';
// import dashboard from './assets/dashboard-icone.png';
// import contact from './assets/user-icone.png';
// import chat from './assets/chat-icone.png';
// import picture from './assets/profile.png';

function App() {
  return (
    <BrowserRouter>

      {/* <div className="ml-5 mt-5">
        <div className="text-[#109CF1]">
          <h1>SaaS Kit</h1>
        </div>
        <br />
        <div className="flex items-center">
          <div className="rounded-full">
            <img className="rounded-full ..." src={picture} alt="profile" />
          </div>
          <div>
            &nbsp;
            <strong>Sierra Ferguson</strong>
            <br />
            &nbsp;
            <span>s.ferguson@gmail.com</span>

          </div>
        </div>
        <ul>
          <br />
          <div className="flex items-center">

            <img src={dashboard} alt="dashboard" />
            &nbsp;
            <li><a href="/dashboard">Dashboard</a></li>

          </div>
          <br />
          <div className="flex items-center">

            <img src={contact} alt="contact" />
            &nbsp;
            <li><a href="/contact">Contacts</a></li>
          </div>
          <br />
          <div className="flex items-center">
            <img src={chat} alt="chat" />
            &nbsp;
            <li><a href="/chat">Chat</a></li>
          </div>

        </ul>
      </div> */}
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />}> </Route>
        <Route path="/contact" element={<ContactPage />}> </Route>
        <Route path="/chat" element={<ChatPage />}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
