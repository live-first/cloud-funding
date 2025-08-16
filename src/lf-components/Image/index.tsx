import { cn } from '../utils'
import { CSSProperties } from 'react'
import Image from 'next/image'
import { ImgType } from '@/domain/img'

export type ImgProps = ImgType & {
  style?: CSSProperties
  notNext?: boolean
}

/**
 * Imgコンポーネント
 *
 * notNextを指定するとnext/imageでない方を使用します
 * @param props
 * @returns
 */
export const Img = (props: ImgProps) => {
  const { src, alt, cName, style, notNext = false } = props
  return notNext ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt || ''} className={cn('w-auto', cName)} style={style} />
  ) : (
    <div className={cName}>
      <Image src={src} alt={alt || ''} className={cn('!relative', cName)} style={style} fill />
    </div>
  )
}
