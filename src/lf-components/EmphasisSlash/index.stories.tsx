import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { EmphasisSlash } from './index'

const meta = {
  title: 'Components/EmphasisSlash',
  component: EmphasisSlash,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmphasisSlash>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    children: 'キャンペーン中！',
  },
}
