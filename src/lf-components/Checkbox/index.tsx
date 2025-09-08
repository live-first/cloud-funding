import { ChangeEventHandler } from 'react'
import { cn } from '../utils'
import './style.css'

type CheckboxProps = {
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  disabled?: boolean
  className?: string
  label?: string
  checked?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    required = false,
    size = 'md',
    error,
    disabled = false,
    className,
    label,
    checked = false,
    onChange,
  } = props

  return (
    <div className='flex'>
      <input
        type='checkbox'
        required={required}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className={cn(`input-text-${size}`, error && 'error', 'p-2 rounded-md', className)}
      />
      {label}
    </div>
  )
}
