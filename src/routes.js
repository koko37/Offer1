import React from 'react';
import MainLayout from './layouts/MainLayout';
import DefaultLayout from './layouts/DefaultLayout';
import HomeListView from './views/home/HomeListView';
import HomeDetailView from './views/home/HomeDetailView';
import LoginView from './views/auth/LoginView';
const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/1', element: <HomeDetailView /> },
      { path: '/', element: <HomeListView /> },
    ]
  },
  {
    path: '/login',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <LoginView /> }
    ]
  }
];

export default routes;
