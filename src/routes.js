import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomeListView from './views/house/HomeListView';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomeListView /> },
    ]
  }
];

export default routes;
