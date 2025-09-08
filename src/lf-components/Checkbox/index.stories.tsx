import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Checkbox } from './index'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary_sm: Story = {
  args: {
    label: 'Checkbox',
    size: 'sm',
    disabled: false,
    onChange: () => {},
  },
}

export const Secondary_md: Story = {
  args: {
    label: 'Checkbox',
    size: 'md',
    disabled: false,
    onChange: () => {},
  },
}

export const Tertiary_lg: Story = {
  args: {
    label: 'Checkbox',
    size: 'lg',
    disabled: false,
    onChange: () => {},
  },
}
