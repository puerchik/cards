import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

import logOutIcon from './icons/log-out.svg'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  icon?: string | boolean
  children: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullWidth,
    children,
    className,
    icon,
    as: Component = 'button',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {icon && <img src={`${icon === true ? logOutIcon : icon}`} alt="" />}
      {children}
    </Component>
  )
}
