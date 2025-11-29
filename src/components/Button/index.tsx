import { cn } from '../utils'
import './button.css'

type ButtonProps = {
  variant?: 'Primary' | 'Secondary' | 'Tertiary'
  label: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const {
    variant,
    label,
    size = 'md',
    disabled = false,
    className,
    type,
    onClick,
  } = props
  return (
    <button
      className={cn(
        `button-${size} button-${variant} rounded-md text-white p-3 w-full button flex flex-col`,
        className,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
