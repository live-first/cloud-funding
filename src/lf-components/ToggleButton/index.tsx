'use client'

import { cn } from '../utils'
import { ReactNode, useState, PropsWithChildren } from 'react'
import './toggleButton.css'

const Header = ({ className, children }: PropsWithChildren<ToggleButtonCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

const Content = ({ className, children }: PropsWithChildren<ToggleButtonCommon>) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

type ToggleButtonCommon = {
  className?: string
}

type TabHeader = {
  children?: ReactNode
  className?: string
}

export type TabButtonProps = {
  Header?: typeof Header
  Content?: typeof Content
  headers?: TabHeader[]
  contents?: ReactNode[]
  current?: string
  onChange?: () => void
}

const ToggleButton = (props: TabButtonProps) => {
  const { headers, contents, current } = props
  const [tab, setTab] = useState<string>(current ?? '0')

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-11/12 self-center toggle-btn-header rounded-full overflow-hidden my-3'>
        {headers?.map((header, index) => {
          return (
            <button
              className={cn(
                'py-2 bg-panel',
                `${index}` === tab && `active-${index}`,
                `wd-${headers.length}`,
                index + 1 !== headers.length && 'border-r-gray-400',
                header.className,
              )}
              id={`${index}`}
              onClick={(e) => {
                setTab(e.currentTarget.id)
              }}
              key={index}
            >
              {header.children}
            </button>
          )
        })}
      </div>
      <div className='flex flex-col'>
        {contents?.map((content, index) => (
          <div key={index} className={cn(`${index}` === tab ? 'block' : 'hidden')}>
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}

ToggleButton.Header = Header
ToggleButton.Content = Content

export default ToggleButton
