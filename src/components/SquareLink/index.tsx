import Link from 'next/link'
import { cn } from '../utils'
import { ReactNode } from 'react'
import './squareLink.css'

export type SquareLinkProps = {
  href: string
  size?: 'sm' | 'md' | 'lg'
  icon: ReactNode
  label: string
}

export const SquareLink = (props: SquareLinkProps) => {
  const { href, size = 'sm', icon, label } = props
  return (
    <Link href={href} prefetch={true} className={cn(`square-link-${size}`, 'flex flex-col items-center justify-between')}>
      <div className='h-2/3 w-full'>{icon}</div>
      <div className={cn(`square-link-label-${size}`)}>{label}</div>
    </Link>
  )
}
