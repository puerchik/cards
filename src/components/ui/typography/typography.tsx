import s from './typography.module.scss'

export type TypographyProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  textColorMode: 'light' | 'dark'
  children: string
}

export const Typography = ({ variant, textColorMode, children }: TypographyProps) => {
  return (
    <span
      className={`${s.typography} ${s[variant]} ${textColorMode === 'light' ? s.light : s.dark}`}
    >
      {children}
    </span>
  )
}
