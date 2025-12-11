import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='flex flex-col items-center header-gradient py-3'>
      <Link href='/legal'>特定商取引法に基づく表記</Link>
    </div>
  )
}
