import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="bg-[#FBFCFD] font-inter">
      <Navbar />
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;