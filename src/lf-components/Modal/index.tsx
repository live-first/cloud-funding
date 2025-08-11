import { PropsWithChildren, ReactNode, useState } from 'react'
import { cn } from '../utils'
import { CgClose } from 'react-icons/cg'
import './modal.css'

export type ModalProps = {
  button: ReactNode
  isOpen?: boolean
  hideCloseBottomBtn?: boolean
  overlay?: boolean // 背景で閉じる
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { button, isOpen = false, hideCloseBottomBtn = false, overlay = true, children } = props
  const [open, setOpen] = useState<boolean>(isOpen)

  return (
    <div className='flex flex-col w-full'>
      <button className='flex flex-col w-full' onClick={() => setOpen(true)}>
        {button}
      </button>
      <div
        className={cn(
          open ? 'w-full h-full overlay fixed top-0 left-0 z-[200]' : 'hidden',
          'relative',
        )}
      >
        <button
          className='w-full h-full bg-transparent'
          onClick={() => overlay && setOpen(false)}
        ></button>
        <div className='absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-9/12 lg:w-6/12'>
          <div className='flex justify-end'>
            <CgClose
              onClick={() => setOpen(false)}
              className='w-12 h-12 text-white cursor-pointer'
            />
          </div>
          <div className='flex flex-col p-3 gap-4 rounded-2xl bg-white max-h-[80%]'>
            <div className='max-h-[80vh] overflow-auto'>{children}</div>
            {hideCloseBottomBtn ? (
              <></>
            ) : (
              <button onClick={() => setOpen(false)} className='text-white rounded-md w-full py-2'>
                CLOSE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
