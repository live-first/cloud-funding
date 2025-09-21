import { PropsWithChildren } from 'react'
import { cn } from '../utils'
import './style.css'

type MarkerProps = {
  theme: 'yellow' | 'blue' | 'pink' | 'green' | 'orange'
}

export const Marker = (props: PropsWithChildren<MarkerProps>) => {
  const { theme, children } = props
  return <span className={cn(`marker-${theme}`)}>{children}</span>
}
