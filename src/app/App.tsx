import React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProviders";
import cn from "classnames";
import './styles/index.scss';
import { Button } from "shared/Button";
import {VariantButton, SizeButton} from "shared/Button";


interface AppProps {
    className?: string
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <div>Login</div>
  }
]);

export const App  = ({className}: AppProps) => {
  const { theme } = useTheme()
  return (
    <div className={cn('app', theme)}>
      <RouterProvider router={router} />
      <Button variant={VariantButton.EMPTY} size={SizeButton.SMALL}>
        Primary Button
      </Button>
    </div>
  );
}