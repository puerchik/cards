import * as Checkbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import { CheckboxIcon } from './icons/CheckboxIcon'

type CheckboxComponentProps = {
  id: string
  label?: string
}

export const CheckboxComponent = ({ id, label }: CheckboxComponentProps) => {
  return (
    <div className={clsx(s.checkboxWrapper)}>
      <Checkbox.Root className={clsx(s.checkboxRoot)} id={id}>
        <Checkbox.Indicator className={clsx(s.checkboxIndicator)}>
          <CheckboxIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label className={clsx(s.label)} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}
