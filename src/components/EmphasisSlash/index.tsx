import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './style.css'

type EmphasisSlashProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const EmphasisSlash = (props: PropsWithChildren<EmphasisSlashProps>) => {
  const { size, children } = props
  return (
    <div className={cn(`emphasisSlash-${size}`, 'emphasis-slash')}>{children}</div>
  )
}
