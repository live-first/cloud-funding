import { Header } from '@/lf-templates/header'
import Link from 'next/link'

export const UnLoginHeader = () => {
  return (
    <Header
      left={<></>}
      pcView={
        <div className='flex'>
          <Link href='/login'>
            <div className='px-4 h-full rounded-full'>Login</div>
          </Link>
          <Link href='/signup'>
            <div className='px-4 h-full rounded-full'>Signup</div>
          </Link>
        </div>
      }
      spView={<></>}
    />
  )
}
