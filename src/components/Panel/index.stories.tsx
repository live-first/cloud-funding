import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Panel } from './index'

const meta = {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm',
    children: <div className='w-24 h-24 bg-amber-300'></div>,
  },
}

export const Panel_sm: Story = {
  args: {
    size: 'sm',
    children: <div className='w-24 h-24 bg-amber-300'></div>,
  },
}

export const Panel_md: Story = {
  args: {
    size: 'md',
    children: <div className='w-24 h-24 bg-amber-300'></div>,
  },
}

export const Panel_lg: Story = {
  args: {
    size: 'lg',
    children: <div className='w-24 h-24 bg-amber-300'></div>,
  },
}

export const Panel_xl: Story = {
  args: {
    size: 'xl',
    children: <div className='w-24 h-24 bg-amber-300'></div>,
  },
}
