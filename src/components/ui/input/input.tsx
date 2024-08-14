import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

import { Typography } from '../typography'
import { SearchIcon } from './icons/SearchIcon'

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
        {type === 'search' && <SearchIcon searchIconStyle={s.searchIcon} />}
        {!!error && (
          <Typography classnames={s.errorText} variant={'caption'}>
            {error}
          </Typography>
        )}
      </div>
    </>
  )
}
