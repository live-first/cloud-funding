import { cn } from '../utils'
import './style.css'

type TextAreaProps = {
  id: string
  placeholder?: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  disabled?: boolean
  className?: string
}

export const TextArea = (props: TextAreaProps) => {
  const {
    id,
    placeholder,
    required = false,
    size = 'md',
    error,
    disabled = false,
    className,
  } = props

  return (
    <textarea
      placeholder={placeholder}
      required={required}
      id={id}
      disabled={disabled}
      className={cn(`input-text-${size}`, error && 'error', 'p-2 rounded-md', className)}
    />
  )
}
