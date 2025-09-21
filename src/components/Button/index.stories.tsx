import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './index'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary_sm: Story = {
  args: {
    variant: 'Primary',
    label: 'Button',
    size: 'sm',
    disabled: false
  },
}

export const Secondary_md: Story = {
  args: {
    variant: 'Secondary',
    label: 'Button',
    size: 'md',
    disabled: false
  },
}

export const Tertiary_lg: Story = {
  args: {
    variant: 'Tertiary',
    label: 'Button',
    size: 'lg',
    disabled: false
  },
}
