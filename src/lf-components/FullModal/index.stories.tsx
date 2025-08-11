import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { FullModal, ModalProps } from './index'

const Temp = (props: ModalProps) => {
  return (
    <div className='w-[1000px] h-[1000px] bg-amber-200'>
      <FullModal {...props} />
    </div>
  )
}

const meta = {
  title: 'Components/FullModal',
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
    isOpen: false,
    title: '設定',
    backBtn: <></>,
  },
}
