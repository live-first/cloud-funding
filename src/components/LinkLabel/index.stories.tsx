import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { LinkLabel } from './index'

const meta = {
  title: 'Components/Link',
  component: LinkLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'すべて見る',
    src: '#',
  },
}

export const External: Story = {
  args: {
    label: '外部リンク',
    src: '#',
    isExternal: true,
  },
}
