import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './panel.css'

type PanelProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const Panel = (props: PropsWithChildren<PanelProps>) => {
  const { size = 'md', className, children } = props

  return <div className={cn('flex flex-col panel bg-panel', `panel-${size}`, className)}>{children}</div>
}
