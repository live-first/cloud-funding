'use client'

import { cn } from '@/lf-components/utils'
import { ReactNode, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export type LayoutProps = {
  header: ReactNode
  left: ReactNode
  main?: ReactNode
  footer?: ReactNode
}

export const LeftMenuLayout = (props: LayoutProps) => {
  const { header, left, main, footer } = props
  const [open, isOpen] = useState<boolean>(true)

  return (
    <>
      <header className='fixed w-full h-16 z-50'>{header}</header>
      <main className='min-h-full flex'>
        <div
          className={cn(
            open ? 'w-80' : 'w-14',
            'flex flex-col h-dvh bg-gray-100 border-r border-gray-500 relative',
          )}
        >
          {open ? (
            <div className='flex w-full h-full pt-16'>
              {left}
            </div>
          ) : (
            <button className='w-full h-full  text-4xl' onClick={() => isOpen(true)}>
              <HiChevronRight />
            </button>
          )}
          <button
            className={cn(
              open ? 'absolute w-80 bottom-0 left-0' : 'hidden',
              'w-full h-12 text-center justify-center text-4xl bg-gray-100',
            )}
            onClick={() => isOpen(false)}
          >
            <HiChevronLeft />
          </button>
        </div>
        <div className='flex flex-col w-full mt-16 overflow-scroll'>
          {main}
        </div>
      </main>
      <footer>{footer}</footer>
    </>
  )
}
