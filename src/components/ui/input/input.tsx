import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

import { Typography } from '../typography'

type InputProps = {
  classnames?: string
  error?: string
  placeholder: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { classnames, disabled, error, placeholder, type } = props

  return (
    <>
      <div className={s.wrapper}>
        <input
          className={clsx(s.input, { [s.error]: !!error }, classnames && { [classnames]: true }, {
            [s.search]: type === 'search',
          })}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
        />
        {type === 'search' && (
          <svg
            className={s.searchIcon}
            fill={'none'}
            height={'24.000000'}
            viewBox={'0 0 24 24'}
            width={'24.000000'}
            xmlns={'http://www.w3.org/2000/svg'}
          >
            <defs>
              <clipPath id={'clip5661_1973'}>
                <rect
                  fill={'white'}
                  fillOpacity={'0'}
                  height={'24.000000'}
                  id={'search-outline'}
                  width={'24.000000'}
                />
              </clipPath>
            </defs>
            <rect
              fill={'#FFFFFF'}
              fillOpacity={'0'}
              height={'24.000000'}
              id={'search-outline'}
              width={'24.000000'}
            />
            <g clipPath={'url(#clip5661_1973)'}>
              <g opacity={'0.000000'}>
                <path
                  d={'M0 0L24 0L24 24L0 24L0 0Z'}
                  fill={'#000000'}
                  fillOpacity={'1.000000'}
                  fillRule={'evenodd'}
                  id={'Vector'}
                />
              </g>
              <path
                d={
                  'M20.71 19.29L17.31 15.9C18.4 14.5 19 12.77 19 11C19 9.41 18.53 7.87 17.65 6.55C16.77 5.23 15.52 4.21 14.06 3.6C12.59 3 10.99 2.84 9.43 3.15C7.88 3.46 6.46 4.22 5.34 5.34C4.22 6.46 3.46 7.88 3.15 9.43C2.84 10.99 3 12.59 3.6 14.06C4.21 15.52 5.23 16.77 6.55 17.65C7.87 18.53 9.41 19 11 19C12.77 19 14.5 18.4 15.9 17.31L19.29 20.71C19.38 20.8 19.49 20.87 19.61 20.92C19.73 20.97 19.86 21 20 21C20.13 21 20.26 20.97 20.38 20.92C20.5 20.87 20.61 20.8 20.71 20.71C20.8 20.61 20.87 20.5 20.92 20.38C20.97 20.26 21 20.13 21 20C21 19.86 20.97 19.73 20.92 19.61C20.87 19.49 20.8 19.38 20.71 19.29ZM5 11C5 9.81 5.35 8.65 6.01 7.66C6.67 6.67 7.6 5.91 8.7 5.45C9.8 5 11 4.88 12.17 5.11C13.33 5.34 14.4 5.91 15.24 6.75C16.08 7.59 16.65 8.66 16.88 9.82C17.11 10.99 16.99 12.19 16.54 13.29C16.08 14.39 15.32 15.32 14.33 15.98C13.34 16.64 12.18 17 11 17C9.4 17 7.88 16.36 6.75 15.24C5.63 14.11 5 12.59 5 11Z'
                }
                fill={'#000000'}
                fillOpacity={'1.000000'}
                fillRule={'nonzero'}
                id={'Vector'}
              />
            </g>
          </svg>
        )}
        {!!error && (
          <Typography classnames={s.errorText} variant={'caption'}>
            {error}
          </Typography>
        )}
      </div>
    </>
  )
}
