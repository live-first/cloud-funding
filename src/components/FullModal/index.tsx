'use client'

import { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { cn } from '../utils'
import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { Header } from '../Header'
import './fullModal.css'

export type ModalProps = {
  button: ReactNode
  isOpen?: boolean
  title: string
  backBtn?: ReactNode
  cName?: string
}

export const FullModal = (props: PropsWithChildren<ModalProps>) => {
  const { button, isOpen = false, title, backBtn, children, cName } = props
  const [open, setOpen] = useState<boolean>(isOpen)

  useEffect(() => {
    if (open) {
      // モーダルオープン中はスクロールロック
      document.body.style.overflow = 'hidden'
    } else {
      // モーダルが閉じたら元に戻す
      document.body.style.overflow = 'scroll'
    }
  }, [open])

  const BackBtn = () => {
    return (
      <button className='w-full h-full' onClick={() => setOpen(false)}>
        {backBtn}
      </button>
    )
  }

  const Main = () => {
    return (
      <div className='w-dvw h-dvh overflow-y-scroll overscroll-contain'>
        <div className='pt-14 pb-8'>{children}</div>
      </div>
    )
  }

  return (
    <div>
      <button className={cName} onClick={() => setOpen(true)}>
        {button}
      </button>
      <div className={cn(open ? 'fixed top-0 left-0 z-20 modal-body' : 'slide-out')}>
        <SingleViewLayout
          header={
            <div className='flex flex-col w-full h-full justify-center'>
              <Header left={<BackBtn />} center={title} />
            </div>
          }
          main={<Main />}
        />
      </div>
    </div>
  )
}
