import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Tag } from './index'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '清楚系',
    onClick: () => {},
    disabled: false,
    isSelected: false,
  },
}

export const Selected: Story = {
  args: {
    label: '清楚系',
    onClick: () => {},
    disabled: false,
    isSelected: true,
  },
}

export const Disabled: Story = {
  args: {
    label: '清楚系',
    onClick: () => {},
    disabled: true,
    isSelected: false,
  },
}
