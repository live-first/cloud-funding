import { JSX, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../utils'
import './heading.css'

export type HeadingProps = {
  tag: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  label: string
  right?: ReactNode
}

export const Heading = (props: PropsWithChildren<HeadingProps>) => {
  const { tag, className, label, right } = props
  const Tag = `h${tag}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={cn('flex items-start justify-between', `h${tag}`, className)}>
      <div className={`h${tag}-label`}>{label}</div>
      <div>{right}</div>
    </Tag>
  )
}
