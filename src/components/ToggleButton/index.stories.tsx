import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import TabButton from './index'

const Temp = () => {
  return (
    <div className='w-[500px] flex items-center'>
      <TabButton
        headers={[
          { className: 'bg-primary', children: <div key='0'>DAY1</div> },
          { className: 'bg-secondary', children: <div key='1'>DAY2</div> },
          { className: 'bg-tertiary', children: <div key='2'>DAY3</div> },
        ]}
        contents={[
          <TabButton.Content key='0' className='w-full bg-amber-200 h-[300px]'></TabButton.Content>,
          <TabButton.Content
            key='1'
            className='w-full bg-emerald-200 h-[300px]'
          ></TabButton.Content>,
          <TabButton.Content key='2' className='w-full bg-blue-200 h-[300px]'></TabButton.Content>,
        ]}
      />
    </div>
  )
}

const meta = {
  title: 'Components/TabButton',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
