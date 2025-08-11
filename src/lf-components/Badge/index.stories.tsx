import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Badge } from './index'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    theme: 'info',
    label: 'new',
  },
}

export const Error: Story = {
  args: {
    theme: 'error',
    label: 'error',
  },
}

export const Attention: Story = {
  args: {
    theme: 'attention',
    label: 'attention',
  },
}

export const Warning: Story = {
  args: {
    theme: 'warning',
    label: 'warning',
  },
}
