import { cn } from '../utils'
import './button.css'

type ButtonProps = {
  variant?: 'Primary' | 'Secondary' | 'Tertiary'
  label: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { variant = 'Primary', label, size = 'md', disabled = false, className } = props
  return (
    <button
      className={cn(
        `button-${size} button-${variant} rounded-md text-white p-3 w-full button flex flex-col`,
        className,
      )}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
