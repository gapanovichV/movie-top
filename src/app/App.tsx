import React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProviders";
import cn from "classnames";
import './styles/index.scss';
import {Main} from "pages/Main";

export enum RoutePath  {
  MAIN = '/',
  LOGIN = '/login',
  PROFILE = '/profile'
}

const router = createBrowserRouter([
  {
    path: RoutePath.MAIN,
    element: <Main />,
  },
  {
    path: RoutePath.LOGIN,
    element: <div>Login</div>
  },
  {
    path: RoutePath.PROFILE,
    element: <div>PROFILE</div>
  }
]);

export const App  = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
}