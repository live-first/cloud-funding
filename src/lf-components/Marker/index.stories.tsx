import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Marker } from './index'

const meta = {
  title: 'Components/Marker',
  component: Marker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const MarkerYellow: Story = {
  args: {
    theme: 'yellow',
    children: '目立たせたい文字',
  },
}

export const MarkerBlue: Story = {
  args: {
    theme: 'blue',
    children: '目立たせたい文字',
  },
}

export const MarkerPink: Story = {
  args: {
    theme: 'pink',
    children: '目立たせたい文字',
  },
}

export const MarkerGreen: Story = {
  args: {
    theme: 'green',
    children: '目立たせたい文字',
  },
}

export const MarkerOrange: Story = {
  args: {
    theme: 'orange',
    children: '目立たせたい文字',
  },
}
