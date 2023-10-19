import React from 'react'
import {useTheme} from "app/providers/ThemeProviders";
import cn from "classnames";
import './styles/index.scss';

interface AppProps {
    className?: string
}
export const App  = ({className}: AppProps) => {
  const { theme } = useTheme()
  return (
    <div className={cn('app', theme)}>

    </div>
  );
}