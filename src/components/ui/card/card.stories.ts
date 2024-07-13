import { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardContainer: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
