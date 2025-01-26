import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area should grow to fill available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
