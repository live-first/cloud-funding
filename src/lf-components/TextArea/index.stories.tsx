import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TextArea } from './index'

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '1',
    placeholder: 'place holder',
  },
}
