import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './badge.css'

type BadgeProps = {
  theme: 'error' | 'attention' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Badge = (props: PropsWithChildren<BadgeProps>) => {
  const { theme, children, size = 'md' } = props

  return (
    <span className={cn(`badge-${theme} badge-${size} py-1 px-3 rounded-full`)}>{children}</span>
  )
}
