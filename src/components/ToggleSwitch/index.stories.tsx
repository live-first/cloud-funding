import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ToggleSwitch } from './index'

const meta = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Switch_Off: Story = {
  args: {
    id: '1',
    checked: false,
    onChange: () => {},
  },
}
export const Switch_On: Story = {
  args: {
    id: '2',
    checked: true,
    onChange: () => {},
  },
}
