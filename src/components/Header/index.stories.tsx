import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Header, HeaderProps } from './index'

const Temp = (props: HeaderProps) => {
  return (
    <div className='w-[500px]'>
      <Header {...props} />
    </div>
  )
}

const meta = {
  title: 'Components/Header',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary_sm: Story = {
  args: {
    left: <></>,
    center: 'HOME',
    right: <></>,
  },
}
