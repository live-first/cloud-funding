import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { SquareLink, SquareLinkProps } from './index'
import { FaTshirt } from 'react-icons/fa'

const Temp = (props: SquareLinkProps) => {
  return (
    <div className='w-[500px] flex items-center'>
      <SquareLink {...props} />
    </div>
  )
}

const meta = {
  title: 'Components/SquareLink',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    size: 'sm',
    icon: <FaTshirt className='w-full h-full' color='#3048ff' />,
    label: 'グッズ',
  },
}
