'use client'

import { ReactNode, useState } from 'react'
import './style.css'
import { cn } from '@/lf-components/utils'

export type HeaderProps = {
  left: ReactNode
  pcView: ReactNode
  spView: ReactNode
}

export const Header = (props: HeaderProps) => {
  const [isShow, setShow] = useState<boolean>(false)
  const { left, pcView, spView } = props

  return (
    <div className={cn('flex w-full h-full pl-3 justify-between items-center bg-blue-700')}>
      {left}

      <div className='hidden md:flex'>{pcView}</div>
      <button
        className={cn(
          'flex flex-col md:hidden hamburger-menu items-center mr-3',
          isShow ? 'active' : '',
        )}
        id='menu01'
        onClick={() => setShow(!isShow)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isShow ? (
        <div className='absolute top-0 left-0 w-dvw h-dvh bg-menu-sp md:hidden overflow-scroll pb-4'>
          {spView}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
