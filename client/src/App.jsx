import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import AdventureSection from './components/AdventureSection';
import ExploreSection from './components/ExploreSection';
import CalendarSection from './components/CalendarSection';
import SignUpPage from './components/SignUpPage';
import axiosInstance, { setAccessToken } from '../axiosInstance';
import LoginPage from './components/LoginPage';
import PlanPage from './components/PlanPage';
import TravelBuddiesPage from './components/TravelBuddiesPage';

export default function App() {
  const [user, setUser] = useState();
  const [planCountries, setPlanCountries] = useState([]);
  const [plan, setPlan] = useState([]);

  const addCountryToPlan = (country) => {
    setPlanCountries((prevPlan) => [...prevPlan, country]);
  };

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
              <ExploreSection onAddToPlan={addCountryToPlan} setPlan={setPlan} />
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
        {
          path: 'plan',
          element: <PlanPage planCountries={plan} />,
        },
        {
          path: 'travel-buddies',
          element: <TravelBuddiesPage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
