import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Select } from './index'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '1',
    required: true,
    error: '',
    options: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
    ],
  },
}

export const Error: Story = {
  args: {
    id: '1',
    required: true,
    error: '選択してください',
    options: [
      {
        value: '1',
        label: '1',
      },
    ],
  },
}
