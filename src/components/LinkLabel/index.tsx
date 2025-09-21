import { GoLinkExternal } from 'react-icons/go'
import { cn } from '../utils'
import './link.css'

type LinkLabelProps = {
  label: string
  src: string
  isExternal?: boolean
}

export const LinkLabel = (props: LinkLabelProps) => {
  const { label, src, isExternal } = props
  return (
    <a href={src} className={cn('flex link')}>
      {label}
      {isExternal && (
        <span className='ml-1 link-external'>
          <GoLinkExternal />
        </span>
      )}
    </a>
  )
}
