import React from 'react';

export const drawerRoutes = {};

const drawerRoute = route => component => {
  drawerRoutes[route] = component;
  return component;
};

export default drawerRoute;
