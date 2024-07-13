import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

import logOutIcon from './icons/log-out.svg'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: string
  fullWidth?: boolean
  icon?: boolean | string
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {icon && <img alt={''} src={`${icon === true ? logOutIcon : icon}`} />}
      {children}
    </Component>
  )
}
