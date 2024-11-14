import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ user, handleLogout }) {
  return (
    <div className="container">
      <Header user={user} handleLogout={handleLogout} />
      <Outlet />
    </div>
  );
}
