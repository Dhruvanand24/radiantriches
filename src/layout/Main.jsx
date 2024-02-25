import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="min-h-screen bg-[#FBFCFD]">
      <Navbar />
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;