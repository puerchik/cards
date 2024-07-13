import s from './typography.module.scss'

export type TypographyProps = {
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

export const Typography = ({ children, variant }: TypographyProps) => {
  return <span className={`${s.typography} ${s[variant]}`}>{children}</span>
}
