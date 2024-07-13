import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    icon: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    as: 'a',
    children: 'Primary Button',
    disabled: false,
    icon: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    as: 'a',
    children: 'Secondary Button',
    disabled: false,
    icon: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    as: 'a',
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    icon: false,
    variant: 'primary',
  },
}
