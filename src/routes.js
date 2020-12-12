import React from 'react';
import MainLayout from './layouts/MainLayout';
import ProductListView from './views/product/ProductListView';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <ProductListView /> },
    ]
  }
];

export default routes;
