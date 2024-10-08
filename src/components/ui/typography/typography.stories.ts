import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'span',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'link2',
  },
}
