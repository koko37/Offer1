import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomeListView from './views/house/HomeListView';
import LoginView from './views/auth/LoginView';
const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomeListView /> },
      { path: '/login', element: <LoginView /> },
    ]
  }
];

export default routes;
