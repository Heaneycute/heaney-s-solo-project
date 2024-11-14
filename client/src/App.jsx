import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import AdventureSection from './components/AdventureSection';
import ExploreSection from './components/ExploreSection';
import CalendarSection from './components/CalendarSection';
import SignUpPage from './components/SignUpPage';
import axiosInstance, { setAccessToken } from '../axiosInstance';
import LoginPage from './components/LoginPage';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
        setAccessToken('');
      });
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/login', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };

  const handleLogout = async () => {
    const res = await axiosInstance.post('/auth/logout');
    if (res.status === 200) {
      setUser(null);
      setAccessToken('');
    }
  };

  const routes = [
    {
      path: '/',
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          index: true,
          element: (
            <>
              <AdventureSection />
              <ExploreSection />
              <CalendarSection />
            </>
          ),
        },
        {
          path: 'signup',
          element: <SignUpPage handleSignUp={handleSignUp} />,
        },
        {
          path: 'login',
          element: <LoginPage handleLogin={handleLogin} />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}