import { ChangeEventHandler } from 'react'
import { cn } from '../utils'

export type Options = {
  value: string | number
  label: string
}

export type SelectProps = {
  id: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  className?: string
  options: Options[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export const Select = (props: SelectProps) => {
  const { id, required, size = 'md', error, className, options, onChange } = props

  return (
    <select
      id={id}
      required={required}
      className={cn(`select-${size}`, error && 'error', className)}
      onChange={onChange}
    >
      <option value={0}>選択してください</option>
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
