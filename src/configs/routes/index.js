import React from 'react';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import Admin from '../../pages/admin';

/**
|--------------------------------------------------
| auth: -1 unlogin, 0 : unlogin && logined, 1: logined
|--------------------------------------------------
*/

export default [
  {
    path: '/',
    exact: true,
    auth: 1,
    redirect: '/login',
    component: () => <Home />,
  },
  {
    path: '/admin',
    exact: true,
    auth: 1,
    redirect: '/login',
    component: () => <Admin />
  },
  {
    path: '/admin/*',
    exact: true,
    auth: 1,
    redirect: '/login',
    component: () => <Admin />
  },
  {
    path: '/profile',
    exact: true,
    auth: 1,
    redirect: '/login',
    component: () => <Profile />,
  },
  {
    path: '/login',
    exact: false,
    auth: -1,
    redirect: '/',
    component: () => <Login />,
  },
  {
    path: '*',
    exact: false,
    auth: 0,
    redirect: null,
    component: () => <NotFound />,
  },
];
