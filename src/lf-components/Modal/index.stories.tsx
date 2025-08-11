import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Modal, ModalProps } from './index'

const Temp = (props: ModalProps) => {
  return (
    <div className='w-[1000px] h-[1000px] bg-amber-200'>
      <Modal {...props} />
    </div>
  )
}

const meta = {
  title: 'Components/Modal',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const ModalDefault: Story = {
  args: {
    button: 'Modal Open',
  },
}
