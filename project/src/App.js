import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './Pages/DashboardPage';
import ContactPage from './Pages/ContactPage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><a href="/dashboard">dashboard</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/chat">chat</a></li>
      </ul>

      <Routes>
        <Route path="/dashboard" element={<DashboardPage />}> </Route>
        <Route path="/contact" element={<ContactPage />}> </Route>
        <Route path="/chat" element={<ChatPage />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
