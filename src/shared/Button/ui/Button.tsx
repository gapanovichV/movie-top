import React, {ReactNode} from 'react'
import cn from "classnames";
import cls from './Button.module.scss'

export enum VariantButton {
  PRIMARY = 'primary',
  EMPTY = 'empty',
  DISABLE = 'disable',
  SECONDARY = 'secondary',
  BORDER = 'border'
}
export enum SizeButton {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large'
}
interface ButtonProps {
  className?: string
  children: ReactNode
  variant: VariantButton
  size: SizeButton
  leftIcon?: boolean
}
export const Button  = (props: ButtonProps) => {
  const {
    children,
    size,
    variant,
    className,
    leftIcon
  } = props
  return (
    <button
      className={cn(cls.Button, className,
        cls[`Variant-${variant}`],
        cls[`Size-${size}`],
        {[cls.LeftIcon]: leftIcon}

      )}>
      {children}
    </button>
  );
}