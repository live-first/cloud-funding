import { ReactNode } from 'react'
import './header.css'

export type HeaderProps = {
  left?: ReactNode
  center: ReactNode | string
  right?: ReactNode
}

export const Header = (props: HeaderProps) => {
  const { left, center, right } = props

  return (
    <div className='header'>
      <div className='header-left'>{left}</div>
      <div className='header-center'>{center}</div>
      <div className='header-right'>{right}</div>
    </div>
  )
}
