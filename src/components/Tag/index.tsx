import { cn } from '../utils'
import './tag.css'

type TagProps = {
  label: string
  onClick: () => void
  disabled?: boolean
  isSelected?: boolean
}

export const Tag = (props: TagProps) => {
  const { label, onClick, disabled = false, isSelected = false } = props
  return (
    <input
      type='button'
      onClick={onClick}
      className={cn(isSelected && 'select')}
      disabled={disabled}
      value={`# ${label}`}
    />
  )
}
