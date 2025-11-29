import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './button.css'

export type ButtonProps = {
  variant?: 'Primary' | 'Secondary' | 'Tertiary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    variant,
    size = 'md',
    disabled = false,
    className,
    type,
    onClick,
    children
  } = props
  return (
    <button
      className={cn(
        `button-${size} button-${variant} rounded-md text-white p-3 button flex flex-col`,
        className,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
