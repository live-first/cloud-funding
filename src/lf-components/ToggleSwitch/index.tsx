import { cn } from '../utils'
import './toggleSwitch.css'

type ToggleSwitchProps = {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { id, checked, onChange, size = 'md', className } = props

  return (
    <>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={() => {
          onChange(!checked)
        }}
        className={cn('switch-input', `switch-${size}`, className)}
      />
      <label htmlFor={id} className='switch-label'></label>
    </>
  )
}
