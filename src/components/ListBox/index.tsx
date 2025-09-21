import { PropsWithChildren } from 'react'
import { cn } from '../utils'

const Row = ({ children }: PropsWithChildren) => {
  return <div className='listbox-row'>{children}</div>
}

const Col = ({ children }: PropsWithChildren) => {
  return <div className='listbox-col'>{children}</div>
}

type ListBoxProps = {
  variant?: 'row' | 'col'
  Row?: typeof Row
  Col?: typeof Col
}

const ListBox = (props: PropsWithChildren<ListBoxProps>) => {
  const { variant = 'row', children } = props
  return <div className={cn('flex', variant === 'row' && 'flex-col')}>{children}</div>
}

ListBox.Row = Row
ListBox.Col = Col

export default ListBox
