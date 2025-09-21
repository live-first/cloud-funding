import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import ListBox from './index'

const Temp = () => {
  return (
    <ListBox>
      <ListBox.Row>
        <ListBox.Col>List</ListBox.Col>
        <ListBox.Col>List</ListBox.Col>
        <ListBox.Col>List</ListBox.Col>
        <ListBox.Col>List</ListBox.Col>
        <ListBox.Col>List</ListBox.Col>
      </ListBox.Row>
    </ListBox>
  )
}

const meta = {
  title: 'Components/ListBox',
  component: Temp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Temp>

export default meta
type Story = StoryObj<typeof meta>

export const ListDefault: Story = {
  args: {},
}
