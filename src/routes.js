import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomeListView from './views/house/HomeListView';
import HomeDetailView from './views/house/HomeDetailView';
import LoginView from './views/auth/LoginView';
const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/login', element: <LoginView /> },
      { path: '/1', element: <HomeDetailView /> },
      { path: '/', element: <HomeListView /> },
    ]
  }
];

export default routes;
