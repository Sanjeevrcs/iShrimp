import Dashboard from '../routes/Dashboard';
import Bots from '../routes/Bots';
import Trips from '../routes/Trips';
import Login from '../routes/Login';
import path from 'path';
import React from 'react';
import { MdOutlineDashboard, MdTroubleshoot, MdPolicy } from 'react-icons/md';
import { Layout } from 'lucide-react';

export const routes = [
  {
    path: '/',
    component: <Dashboard />,
    isNavItem: true,
    label: 'Dashboard',
    icons: <MdOutlineDashboard />,
    layout: true,
  },
  {
    path: '/trips',
    component: <Trips />,
    isNavItem: true,
    label: 'Trips',
    icons: <MdOutlineDashboard />,
    layout: true,
  },
  {
    path: '/bots',
    component: <Bots />,
    isNavItem: true,
    label: 'Bots',
    icons: <MdOutlineDashboard />,
    layout: true,
  },

  {
    path: '/login',
    component: <Login />,
    isNavItem: false,
    label: 'Login',
    icons: <MdOutlineDashboard />,
    layout: false,
  },
];
