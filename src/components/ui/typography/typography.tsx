import { ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: string
  variant:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
}

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, variant } = props

  return <Component className={`${s.typography} ${s[variant]}`}>{children}</Component>
}
