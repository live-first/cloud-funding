import { ImgType } from '@/lf-domain/img'
import { cn } from '../utils'

export type ImgProps = ImgType

export const Image = (props: ImgProps) => {
  const { src, alt, cName } = props
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt || ''} className={cn('w-auto', cName)} />
  )
}
