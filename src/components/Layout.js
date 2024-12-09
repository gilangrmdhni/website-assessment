// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
    return (
      <div className="flex h-screen">
        <div className="fixed w-70 h-full bg-gray-800 text-white">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col pl-64 ">
          <Header />
          <main className="p-4 flex-1 bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    );
  }
  

export default Layout;
